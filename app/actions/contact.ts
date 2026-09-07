"use server";

import nodemailer from "nodemailer";

const RECIPIENT = "samgatemul@gmail.com";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function configurationError(message: string) {
  console.error(`Contact email configuration error: ${message}`);

  return {
    ok: false,
    message:
      process.env.NODE_ENV === "development"
        ? message
        : "Email delivery is temporarily unavailable. Please try again later.",
  };
}

function isGmailAuthError(error: unknown) {
  return (
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    error.code === "EAUTH"
  );
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function sendContactEmail(formData: FormData) {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const projectType = String(formData.get("projectType") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const website = String(formData.get("website") ?? "").trim();

  if (website) {
    return { ok: true, message: "Thanks for reaching out." };
  }

  if (
    name.length < 2 ||
    name.length > 80 ||
    name.includes("\r") ||
    name.includes("\n")
  ) {
    return { ok: false, message: "Please enter your name." };
  }

  if (!EMAIL_PATTERN.test(email) || email.length > 160) {
    return { ok: false, message: "Please enter a valid email address." };
  }

  if (message.length < 20 || message.length > 3000) {
    return {
      ok: false,
      message: "Please share between 20 and 3,000 characters about your project.",
    };
  }

  const gmailUser = (process.env.GMAIL_USER ?? RECIPIENT).trim().toLowerCase();
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD
    ?.trim()
    .replace(/\s+/g, "");

  if (!gmailAppPassword) {
    return configurationError(
      "Add GMAIL_APP_PASSWORD to .env.local, then restart the development server.",
    );
  }

  if (gmailUser !== RECIPIENT) {
    return configurationError(
      `GMAIL_USER must be ${RECIPIENT} for this contact form.`,
    );
  }

  if (gmailAppPassword.length !== 16) {
    return configurationError(
      "GMAIL_APP_PASSWORD must be a 16-character Google App Password, not your regular Gmail password. Update .env.local and restart the development server.",
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: gmailUser, pass: gmailAppPassword },
  });

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeProjectType = escapeHtml(projectType || "Not specified");
  const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

  try {
    await transporter.sendMail({
      from: { name: "Samuel Getachew Portfolio", address: gmailUser },
      to: RECIPIENT,
      replyTo: { name, address: email },
      subject: `Portfolio inquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Project type: ${projectType || "Not specified"}`,
        "",
        message,
      ].join("\n"),
      html: `
        <h2>New portfolio inquiry</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Project type:</strong> ${safeProjectType}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `,
    });

    return { ok: true, message: "Thanks for reaching out." };
  } catch (error) {
    const authFailed = isGmailAuthError(error);
    console.error("Contact email delivery failed", {
      code: authFailed ? "EAUTH" : "UNKNOWN",
    });

    return {
      ok: false,
      message:
        authFailed && process.env.NODE_ENV === "development"
          ? "Gmail rejected the sender credentials. Create a new Google App Password, update GMAIL_APP_PASSWORD in .env.local, then restart the development server."
          : "Direct email delivery failed. Please try again later.",
    };
  }
}

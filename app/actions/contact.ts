"use server";

import nodemailer from "nodemailer";

const RECIPIENT = "samgatemul@gmail.com";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
    return { ok: true, message: "Thanks - your note is on its way." };
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

  const gmailUser = process.env.GMAIL_USER ?? RECIPIENT;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

  if (!gmailAppPassword) {
    return {
      ok: false,
      message:
        "Email delivery is not configured yet. Please email samgatemul@gmail.com directly.",
    };
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
      from: `Samuel Getachew Portfolio <${gmailUser}>`,
      to: RECIPIENT,
      replyTo: `${name} <${email}>`,
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

    return { ok: true, message: "Thanks - your note is on its way." };
  } catch (error) {
    console.error("Contact email delivery failed", error);
    return {
      ok: false,
      message:
        "The message could not be sent right now. Please email samgatemul@gmail.com directly.",
    };
  }
}

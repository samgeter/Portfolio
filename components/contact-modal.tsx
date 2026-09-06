"use client";

import {
  createContext,
  type FormEvent,
  type ReactNode,
  useContext,
  useRef,
  useState,
} from "react";
import { sendContactEmail } from "@/app/actions/contact";

type ContactContextValue = {
  openContact: () => void;
};

const ContactContext = createContext<ContactContextValue | null>(null);

export function ContactModalProvider({ children }: { children: ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<{ ok: boolean; message: string } | null>(
    null,
  );

  const openContact = () => {
    setResult(null);
    dialogRef.current?.showModal();
  };

  const closeContact = () => {
    if (!isSubmitting) dialogRef.current?.close();
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setResult(null);

    const form = event.currentTarget;
    const response = await sendContactEmail(new FormData(form));
    setResult(response);
    setIsSubmitting(false);

    if (response.ok) form.reset();
  }

  return (
    <ContactContext.Provider value={{ openContact }}>
      {children}
      <dialog
        ref={dialogRef}
        className="contact-dialog"
        aria-labelledby="contact-dialog-title"
        onCancel={(event) => {
          if (isSubmitting) event.preventDefault();
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeContact();
        }}
      >
        <div className="contact-dialog-panel">
          <button
            type="button"
            onClick={closeContact}
            className="dialog-close"
            aria-label="Close contact form"
            disabled={isSubmitting}
          >
            <span aria-hidden="true">×</span>
          </button>

          {result?.ok ? (
            <div className="py-8 text-center sm:py-14" aria-live="polite">
              <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-[#7df0b8]/10 text-xl text-[#7df0b8]">
                ✓
              </span>
              <h2
                id="contact-dialog-title"
                className="mt-6 text-3xl font-medium tracking-[-0.04em] text-white"
              >
                Message sent.
              </h2>
              <p className="mx-auto mt-3 max-w-sm leading-7 text-muted">
                {result.message} I&apos;ll get back to you as soon as I can.
              </p>
              <button
                type="button"
                onClick={closeContact}
                className="button-primary mt-8"
              >
                Done
              </button>
            </div>
          ) : (
            <>
              <p className="eyebrow">Start a conversation</p>
              <h2
                id="contact-dialog-title"
                className="mt-4 max-w-lg text-3xl font-medium leading-tight tracking-[-0.045em] text-white sm:text-4xl"
              >
                Tell me a little about what you&apos;re building.
              </h2>
              <p className="mt-4 max-w-lg leading-7 text-muted">
                Your note will go directly to Samuel at samgatemul@gmail.com.
              </p>

              <form className="mt-8 grid gap-5" onSubmit={handleSubmit}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="form-field">
                    <span>Name</span>
                    <input
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Your name"
                      minLength={2}
                      maxLength={80}
                      required
                    />
                  </label>
                  <label className="form-field">
                    <span>Email</span>
                    <input
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@company.com"
                      maxLength={160}
                      required
                    />
                  </label>
                </div>

                <label className="form-field">
                  <span>What can I help with?</span>
                  <select name="projectType" defaultValue="">
                    <option value="" disabled>
                      Select a project type
                    </option>
                    <option>AI product</option>
                    <option>Full-stack engineering</option>
                    <option>Internal tools and automation</option>
                    <option>Product strategy</option>
                    <option>Something else</option>
                  </select>
                </label>

                <label className="form-field">
                  <span>Project details</span>
                  <textarea
                    name="message"
                    placeholder="A quick note about the problem, the team, and where you need help."
                    rows={5}
                    minLength={20}
                    maxLength={3000}
                    required
                  />
                </label>

                <label className="honeypot" aria-hidden="true">
                  Website
                  <input
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </label>

                {result ? (
                  <p className="text-sm leading-6 text-[#ffaaaa]" role="alert">
                    {result.message}
                  </p>
                ) : null}

                <div className="mt-1 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs leading-5 text-muted">
                    Prefer email?
                    <a
                      className="ml-1 text-white underline decoration-white/20 underline-offset-4"
                      href="mailto:samgatemul@gmail.com"
                    >
                      Write directly
                    </a>
                  </p>
                  <button
                    className="button-primary"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send message ↗"}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </dialog>
    </ContactContext.Provider>
  );
}

export function ContactModalTrigger({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) {
  const context = useContext(ContactContext);

  if (!context) {
    throw new Error("ContactModalTrigger must be used inside ContactModalProvider");
  }

  return (
    <button type="button" className={className} onClick={context.openContact}>
      {children}
    </button>
  );
}

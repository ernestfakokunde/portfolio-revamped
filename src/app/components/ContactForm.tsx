"use client";

import { useState, useTransition } from "react";

type FormState = {
  name: string;
  email: string;
  subject: string;
};

type FeedbackState = {
  type: "idle" | "success" | "error";
  message: string;
};

const initialFormState: FormState = {
  name: "",
  email: "",
  subject: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>(initialFormState);
  const [feedback, setFeedback] = useState<FeedbackState>({
    type: "idle",
    message: "",
  });
  const [isPending, startTransition] = useTransition();

  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  const handleChange = (name: keyof FormState, value: string) => {
    setFormState((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formState.name.trim() || !formState.email.trim() || !formState.subject.trim()) {
      setFeedback({
        type: "error",
        message: "Please fill in your name, email, and subject.",
      });
      return;
    }

    if (!emailPattern.test(formState.email)) {
      setFeedback({
        type: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }

    if (!serviceId || !templateId || !publicKey) {
      setFeedback({
        type: "error",
        message:
          "Email delivery is ready in the UI, but the EmailJS keys have not been added yet.",
      });
      return;
    }

    setFeedback({ type: "idle", message: "" });

    startTransition(async () => {
      try {
        const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            service_id: serviceId,
            template_id: templateId,
            user_id: publicKey,
            template_params: {
              name: formState.name,
              from_name: formState.name,
              email: formState.email,
              from_email: formState.email,
              reply_to: formState.email,
              subject: formState.subject,
            },
          }),
        });

        if (!response.ok) {
          throw new Error("Unable to send your message right now.");
        }

        setFormState(initialFormState);
        setFeedback({
          type: "success",
          message: "Your message has been sent successfully.",
        });
      } catch {
        setFeedback({
          type: "error",
          message:
            "Something went wrong while sending your message. Please try again.",
        });
      }
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-5 sm:p-6"
    >
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-100/80">
          Contact form
        </p>
        <h3 className="mt-3 text-2xl font-semibold text-white">
          Start the conversation
        </h3>
        <p className="mt-2 text-sm leading-6 text-slate-300">
          Share your name, your email, and a short subject line about what you
          need.
        </p>
      </div>

      <div className="space-y-4">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-200">
            Name
          </span>
          <input
            type="text"
            name="name"
            value={formState.name}
            onChange={(event) => handleChange("name", event.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none ring-0 placeholder:text-slate-500 focus:border-cyan-200/40"
            placeholder="Your name"
            autoComplete="name"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-200">
            Email
          </span>
          <input
            type="email"
            name="email"
            value={formState.email}
            onChange={(event) => handleChange("email", event.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none ring-0 placeholder:text-slate-500 focus:border-cyan-200/40"
            placeholder="you@example.com"
            autoComplete="email"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-200">
            Subject
          </span>
          <input
            type="text"
            name="subject"
            value={formState.subject}
            onChange={(event) => handleChange("subject", event.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none ring-0 placeholder:text-slate-500 focus:border-cyan-200/40"
            placeholder="What should we build?"
          />
        </label>
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="mt-6 w-full rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 hover:-translate-y-0.5 hover:bg-cyan-100 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isPending ? "Sending..." : "Send message"}
      </button>

      <p
        aria-live="polite"
        className={`mt-4 text-sm ${
          feedback.type === "error"
            ? "text-rose-200"
            : feedback.type === "success"
              ? "text-emerald-200"
              : "text-slate-400"
        }`}
      >
        {feedback.message ||
          (serviceId && templateId && publicKey
            ? "Live delivery Guranteed with Email.js"
            : "EmailJS will send directly once your keys are added.")}
      </p>
    </form>
  );
}

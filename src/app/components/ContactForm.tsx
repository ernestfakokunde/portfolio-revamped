"use client";

import { useState, useTransition } from "react";

type FormState = { name: string; email: string; company: string; projectType: string; description: string; budget: string };
const initialFormState: FormState = { name: "", email: "", company: "", projectType: "", description: "", budget: "" };
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>(initialFormState);
  const [feedback, setFeedback] = useState("");
  const [isError, setIsError] = useState(false);
  const [isPending, startTransition] = useTransition();
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  const handleChange = (name: keyof FormState, value: string) => setFormState((current) => ({ ...current, [name]: value }));

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formState.name.trim() || !formState.email.trim() || !formState.projectType || !formState.description.trim()) {
      setIsError(true); setFeedback("Please complete your name, email, project type, and description."); return;
    }
    if (!emailPattern.test(formState.email)) { setIsError(true); setFeedback("Please enter a valid email address."); return; }

    const details = [
      `Name: ${formState.name}`, `Email: ${formState.email}`, `Company: ${formState.company || "Not provided"}`,
      `Project type: ${formState.projectType}`, `Budget: ${formState.budget || "Not provided"}`, "", formState.description,
    ].join("\n");

    if (!serviceId || !templateId || !publicKey) {
      window.location.href = `mailto:ernestfakokunde9@gmail.com?subject=${encodeURIComponent(`Project enquiry: ${formState.projectType}`)}&body=${encodeURIComponent(details)}`;
      setIsError(false); setFeedback("Your email app should open with the project details ready to send."); return;
    }

    startTransition(async () => {
      try {
        const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
          method: "POST", headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ service_id: serviceId, template_id: templateId, user_id: publicKey, template_params: {
            name: formState.name, from_name: formState.name, email: formState.email, from_email: formState.email,
            reply_to: formState.email, company: formState.company, project_type: formState.projectType,
            budget: formState.budget, description: formState.description, message: details,
          } }),
        });
        if (!response.ok) throw new Error("Send failed");
        setFormState(initialFormState); setIsError(false); setFeedback("Your project enquiry has been sent.");
      } catch {
        setIsError(true); setFeedback("We could not send this enquiry. Please email ernestfakokunde9@gmail.com directly.");
      }
    });
  };

  const inputClass = "w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-lime-200/50";
  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6">
      <div className="mb-6"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-lime-200">Project enquiry</p><h3 className="mt-3 text-2xl font-semibold text-white">Tell me what you&apos;re building</h3><p className="mt-2 text-sm leading-6 text-slate-300">A few details will help me understand what you need.</p></div>
      <div className="space-y-4">
        <label className="block text-sm font-medium text-slate-200">Name<input required autoComplete="name" className={`${inputClass} mt-2`} value={formState.name} onChange={(e) => handleChange("name", e.target.value)} placeholder="Your name" /></label>
        <label className="block text-sm font-medium text-slate-200">Email<input required type="email" autoComplete="email" className={`${inputClass} mt-2`} value={formState.email} onChange={(e) => handleChange("email", e.target.value)} placeholder="you@example.com" /></label>
        <label className="block text-sm font-medium text-slate-200">Business or company <span className="text-slate-500">(optional)</span><input autoComplete="organization" className={`${inputClass} mt-2`} value={formState.company} onChange={(e) => handleChange("company", e.target.value)} placeholder="Company name" /></label>
        <label className="block text-sm font-medium text-slate-200">Type of project<select required className={`${inputClass} mt-2`} value={formState.projectType} onChange={(e) => handleChange("projectType", e.target.value)}><option value="" className="bg-slate-950">Choose a service</option>{["Business website", "Custom web application", "Business management system", "MVP / startup product", "API / payment integration", "Agency development support", "Other"].map((item) => <option key={item} value={item} className="bg-slate-950">{item}</option>)}</select></label>
        <label className="block text-sm font-medium text-slate-200">Project description<textarea required rows={4} className={`${inputClass} mt-2 resize-y`} value={formState.description} onChange={(e) => handleChange("description", e.target.value)} placeholder="What are you looking to build or improve?" /></label>
        <label className="block text-sm font-medium text-slate-200">Budget range <span className="text-slate-500">(optional)</span><select className={`${inputClass} mt-2`} value={formState.budget} onChange={(e) => handleChange("budget", e.target.value)}><option value="" className="bg-slate-950">Prefer not to say</option>{["Under $1,000", "$1,000-$3,000", "$3,000-$7,500", "$7,500+", "To be discussed"].map((item) => <option key={item} value={item} className="bg-slate-950">{item}</option>)}</select></label>
      </div>
      <button type="submit" disabled={isPending} className="mt-6 w-full rounded-full bg-lime-300 px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-lime-200 disabled:opacity-70">{isPending ? "Sending..." : "Send project enquiry"}</button>
      <p aria-live="polite" className={`mt-4 min-h-5 text-sm ${isError ? "text-rose-200" : "text-slate-400"}`}>{feedback || (!serviceId || !templateId || !publicKey ? "Opens your email app with the enquiry details ready to send." : "Your enquiry will be sent securely." )}</p>
    </form>
  );
}

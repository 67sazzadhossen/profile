"use client";

import { FormEvent, useState } from "react";

type Status =
  | { state: "idle"; message: "" }
  | { state: "sending" | "success" | "error"; message: string };

const fieldClass =
  "mt-2 w-full border-0 border-b border-line bg-transparent px-0 py-3 text-[15px] text-foreground outline-none transition-colors placeholder:text-white/25 focus:border-accent";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>({ state: "idle", message: "" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setStatus({
        state: "error",
        message: "Email service is not configured yet.",
      });
      return;
    }

    setStatus({ state: "sending", message: "Sending your message…" });

    try {
      const formData = Object.fromEntries(new FormData(form));
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          from_name: "Sazzad Portfolio",
          subject: `Portfolio inquiry: ${String(formData.projectType || "New project")}`,
          ...formData,
        }),
      });
      const result = (await response.json()) as {
        success?: boolean;
        message?: string;
      };

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Your message could not be sent.");
      }

      form.reset();
      setStatus({
        state: "success",
        message: "Message sent. I’ll get back to you as soon as possible.",
      });
    } catch (error) {
      setStatus({
        state: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    }
  }

  return (
    <form
      className="border border-line bg-white/[.018] p-[clamp(24px,4vw,52px)]"
      onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-2 gap-x-8 gap-y-8 max-[560px]:grid-cols-1">
        <label className="text-[10px] tracking-[.14em] text-muted uppercase">
          Your name
          <input
            className={fieldClass}
            type="text"
            name="name"
            placeholder="John Doe"
            minLength={2}
            maxLength={80}
            autoComplete="name"
            required
          />
        </label>
        <label className="text-[10px] tracking-[.14em] text-muted uppercase">
          Email address
          <input
            className={fieldClass}
            type="email"
            name="email"
            placeholder="john@company.com"
            maxLength={160}
            autoComplete="email"
            required
          />
        </label>
        <label className="text-[10px] tracking-[.14em] text-muted uppercase">
          Project type
          <select className={fieldClass} name="projectType" defaultValue="" required>
            <option value="" disabled className="bg-[#111214]">
              Select one
            </option>
            <option value="Backend API" className="bg-[#111214]">Backend API</option>
            <option value="Full-stack product" className="bg-[#111214]">Full-stack product</option>
            <option value="System integration" className="bg-[#111214]">System integration</option>
            <option value="Existing system" className="bg-[#111214]">Existing system</option>
            <option value="Other" className="bg-[#111214]">Other</option>
          </select>
        </label>
        <label className="text-[10px] tracking-[.14em] text-muted uppercase">
          Timeline
          <select className={fieldClass} name="timeline" defaultValue="">
            <option value="" className="bg-[#111214]">Not decided</option>
            <option value="Less than 1 month" className="bg-[#111214]">Less than 1 month</option>
            <option value="1–3 months" className="bg-[#111214]">1–3 months</option>
            <option value="3–6 months" className="bg-[#111214]">3–6 months</option>
            <option value="Ongoing" className="bg-[#111214]">Ongoing</option>
          </select>
        </label>
      </div>

      <label className="mt-9 block text-[10px] tracking-[.14em] text-muted uppercase">
        Tell me about the project
        <textarea
          className={`${fieldClass} min-h-36 resize-y leading-6`}
          name="message"
          placeholder="The problem, users, current stage, and what you need help with…"
          minLength={20}
          maxLength={4000}
          required
        />
      </label>

      <label className="absolute -left-[9999px]" aria-hidden="true">
        Website
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </label>

      <div className="mt-9 flex items-center justify-between gap-6 max-[560px]:items-start max-[560px]:flex-col">
        <p
          className={`text-xs leading-5 ${
            status.state === "error"
              ? "text-[#ff8f70]"
              : status.state === "success"
                ? "text-accent"
                : "text-muted"
          }`}
          aria-live="polite"
        >
          {status.message || "Your details are sent securely to my inbox."}
        </p>
        <button
          className="group flex min-h-12 cursor-pointer items-center gap-8 rounded-xl bg-accent px-5 text-xs font-bold text-[#11130b] transition-[transform,opacity] duration-300 hover:-translate-y-1 disabled:cursor-wait disabled:opacity-60"
          type="submit"
          disabled={status.state === "sending"}
        >
          {status.state === "sending" ? "Sending…" : "Send project brief"}
          <span
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            aria-hidden="true"
          >
            ↗
          </span>
        </button>
      </div>
    </form>
  );
}

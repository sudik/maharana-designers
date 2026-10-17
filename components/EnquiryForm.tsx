"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const projectTypes = [
  "Residential",
  "Commercial",
  "Renovation",
  "Consultation",
];

const budgetRanges = [
  "Under ₹10L",
  "₹10L – ₹25L",
  "₹25L – ₹50L",
  "₹50L+",
  "Not sure yet",
];

export default function EnquiryForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/enquiry.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-border rounded-2xl p-8 text-center">
        <h2 className="font-serif text-2xl mb-3">Thank you.</h2>
        <p className="text-foreground/70 text-sm">
          We&apos;ve received your enquiry and will get back to you within
          24-48 hours. In the meantime, feel free to browse more of our{" "}
          <a href="/portfolio" className="text-accent hover:text-accent-dark">
            past projects
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Full Name" htmlFor="name">
          <input
            id="name"
            name="name"
            type="text"
            required
            className="field"
          />
        </Field>
        <Field label="Phone" htmlFor="phone">
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="field"
          />
        </Field>
      </div>

      <Field label="Email" htmlFor="email">
        <input id="email" name="email" type="email" required className="field" />
      </Field>

      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Project Type" htmlFor="projectType">
          <select id="projectType" name="projectType" required className="field">
            <option value="">Select one</option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </Field>
        <Field label="City / Location" htmlFor="city">
          <input id="city" name="city" type="text" className="field" />
        </Field>
      </div>

      <Field label="Budget Range (optional)" htmlFor="budget">
        <select id="budget" name="budget" className="field">
          <option value="">Select one</option>
          {budgetRanges.map((range) => (
            <option key={range} value={range}>
              {range}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Tell us about your space (optional)" htmlFor="message">
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Size of the space, what you'd like to change, timeline, inspiration..."
          className="field resize-none"
        />
      </Field>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-cta hover:bg-cta-dark disabled:opacity-60 text-white px-6 py-3.5 rounded-full text-sm transition-colors"
      >
        {status === "submitting" ? "Sending..." : "Send Enquiry"}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong — please try again, or reach us directly at
          shiboo@maharanadesigners.com.
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block text-sm mb-1.5 text-foreground/80">
        {label}
      </label>
      {children}
    </div>
  );
}

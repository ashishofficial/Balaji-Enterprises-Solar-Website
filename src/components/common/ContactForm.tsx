"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site-config";
import { cn, whatsappMessage } from "@/lib/utils";
import { WhatsAppIcon, CheckIcon } from "@/components/icons";

type FormState = {
  name: string;
  phone: string;
  location: string;
  service: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  location: "",
  service: "Rooftop Solar",
  message: "",
};

export function ContactForm({ className }: { className?: string }) {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Balaji Enterprises,\n\nI'd like a free solar quote.\n\nName: ${form.name}\nPhone: ${form.phone}\nLocation: ${form.location}\nService: ${form.service}\n\n${form.message}`;
    window.open(whatsappMessage(text), "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        className={cn(
          "rounded-2xl bg-brand-50 border border-brand-200 p-8 text-center",
          className
        )}
      >
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 text-white">
          <CheckIcon strokeWidth={3} />
        </div>
        <h3 className="mt-4 text-xl font-semibold text-slate-900">
          Thank you, {form.name || "friend"}!
        </h3>
        <p className="mt-2 text-sm text-slate-600">
          We&apos;ve opened WhatsApp with your details. Send the message to start the
          conversation. We typically reply within 30 minutes during business
          hours.
        </p>
        <a
          href={`tel:${siteConfig.phone}`}
          className="btn-primary mt-6 inline-flex"
        >
          Or call us now: {siteConfig.phoneDisplay}
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "rounded-2xl bg-white border border-slate-200 p-6 lg:p-8 shadow-card space-y-4",
        className
      )}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          label="Your Name"
          name="name"
          value={form.name}
          onChange={(v) => setForm({ ...form, name: v })}
          required
        />
        <Field
          label="Phone Number"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={(v) => setForm({ ...form, phone: v })}
          required
          pattern="[0-9+\- ]{10,15}"
        />
      </div>
      <Field
        label="Location / Area"
        name="location"
        value={form.location}
        onChange={(v) => setForm({ ...form, location: v })}
        placeholder="e.g. Basti, Khalilabad, Gorakhpur"
        required
      />
      <div>
        <label
          htmlFor="service"
          className="block text-sm font-medium text-slate-700 mb-1.5"
        >
          Service Required
        </label>
        <select
          id="service"
          name="service"
          value={form.service}
          onChange={(e) => setForm({ ...form, service: e.target.value })}
          className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm focus:border-brand-500 focus:ring-2 focus:ring-brand-200 focus:outline-none"
        >
          <option>Rooftop Solar</option>
          <option>Residential Solar</option>
          <option>Commercial Solar</option>
          <option>On-Grid Solar</option>
          <option>Off-Grid Solar</option>
          <option>Hybrid Solar</option>
          <option>Solar Maintenance / AMC</option>
          <option>Just exploring</option>
        </select>
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-slate-700 mb-1.5"
        >
          Message (Optional)
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Tell us your roof size, current bill, or any questions"
          rows={4}
          className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm focus:border-brand-500 focus:ring-2 focus:ring-brand-200 focus:outline-none resize-none"
        />
      </div>
      <button type="submit" className="btn-whatsapp w-full">
        <WhatsAppIcon width={18} height={18} />
        Send via WhatsApp
      </button>
      <p className="text-xs text-slate-600 text-center">
        By submitting, you agree to be contacted by Balaji Enterprises on the
        number provided.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  value,
  onChange,
  required,
  placeholder,
  pattern,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  placeholder?: string;
  pattern?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-slate-700 mb-1.5"
      >
        {label} {required && <span className="text-rose-500">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        pattern={pattern}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm focus:border-brand-500 focus:ring-2 focus:ring-brand-200 focus:outline-none"
      />
    </div>
  );
}

"use client";

import { useState } from "react";
import * as yup from "yup";
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

type FormErrors = Partial<Record<keyof FormState, string>>;

const lettersAndSpacesRegex = /^[\p{L}\s]+$/u;

const fieldLabels: Record<keyof FormState, string> = {
  name: "Your Name",
  phone: "Phone Number",
  location: "Location / Area",
  service: "Service Required",
  message: "Message",
};

const contactSchema: yup.ObjectSchema<FormState> = yup.object({
  name: yup
    .string()
    .label(fieldLabels.name)
    .trim()
    .required("${label} is required")
    .matches(lettersAndSpacesRegex, "${label} can only contain letters and spaces")
    .min(2, "${label} must be at least 2 characters")
    .max(60, "${label} must be under 60 characters"),
  phone: yup
    .string()
    .label(fieldLabels.phone)
    .trim()
    .required("${label} is required")
    .matches(
      /^(?:\+91[\s-]?)?[6-9]\d{9}$/,
      "Enter a valid 10-digit Indian mobile number"
    ),
  location: yup
    .string()
    .label(fieldLabels.location)
    .trim()
    .required("${label} is required")
    .min(2, "${label} must be at least 2 characters")
    .max(100, "${label} must be under 100 characters"),
  service: yup
    .string()
    .label(fieldLabels.service)
    .required("Please select a ${label}"),
  message: yup
    .string()
    .label(fieldLabels.message)
    .defined()
    .max(500, "${label} must be under 500 characters"),
});

const initialState: FormState = {
  name: "",
  phone: "",
  location: "",
  service: "Rooftop Solar",
  message: "",
};

type ContactFormProps = {
  className?: string;
  defaultLocation?: string;
  callPhone?: string;
  phoneDisplay?: string;
  whatsappNumber?: string;
};

export function ContactForm({
  className,
  defaultLocation = "",
  callPhone = siteConfig.phone,
  phoneDisplay = siteConfig.phoneDisplay,
  whatsappNumber = siteConfig.whatsapp,
}: ContactFormProps) {
  const [form, setForm] = useState<FormState>({
    ...initialState,
    location: defaultLocation,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    try {
      await contactSchema.validate(form, { abortEarly: false });
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        const nextErrors: FormErrors = {};

        error.inner.forEach((item) => {
          if (item.path && !nextErrors[item.path as keyof FormState]) {
            nextErrors[item.path as keyof FormState] = item.message;
          }
        });

        setErrors(nextErrors);
      }

      return;
    }

    const text = `Hello Balaji Enterprises,\n\nI'd like a free solar quote.\n\nName: ${form.name}\nPhone: ${form.phone}\nLocation: ${form.location}\nService: ${form.service}\n\n${form.message}`;
    window.open(
      whatsappMessage(text, whatsappNumber),
      "_blank",
      "noopener,noreferrer"
    );
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
          href={`tel:${callPhone}`}
          className="btn-primary mt-6 inline-flex"
        >
          Or call us now: {phoneDisplay}
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
          label={fieldLabels.name}
          name="name"
          value={form.name}
          onChange={(v) =>
            setForm({
              ...form,
              name: v.replace(/[^\p{L}\s]/gu, "").replace(/\s{2,}/g, " "),
            })
          }
          error={errors.name}
          required
        />
        <Field
          label={fieldLabels.phone}
          name="phone"
          type="tel"
          value={form.phone}
          onChange={(v) =>
            setForm({ ...form, phone: v.replace(/[^\d+\-\s]/g, "") })
          }
          error={errors.phone}
          required
          pattern="[0-9+\- ]{10,15}"
        />
      </div>
      <Field
        label={fieldLabels.location}
        name="location"
        value={form.location}
        onChange={(v) => setForm({ ...form, location: v })}
        placeholder="e.g. Basti, Khalilabad, Gorakhpur"
        error={errors.location}
        required
      />
      <div>
        <label
          htmlFor="service"
          className="block text-sm font-medium text-slate-700 mb-1.5"
        >
          {fieldLabels.service}
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
          {fieldLabels.message} (Optional)
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Tell us your roof size, current bill, or any questions"
          rows={4}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={cn(
            "w-full rounded-lg border bg-white px-3 py-2.5 text-sm focus:ring-2 focus:outline-none resize-none",
            errors.message
              ? "border-rose-400 focus:border-rose-500 focus:ring-rose-100"
              : "border-slate-300 focus:border-brand-500 focus:ring-brand-200"
          )}
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-xs text-rose-600">
            {errors.message}
          </p>
        )}
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
  error,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  placeholder?: string;
  pattern?: string;
  error?: string;
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
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className={cn(
          "w-full rounded-lg border bg-white px-3 py-2.5 text-sm focus:ring-2 focus:outline-none",
          error
            ? "border-rose-400 focus:border-rose-500 focus:ring-rose-100"
            : "border-slate-300 focus:border-brand-500 focus:ring-brand-200"
        )}
      />
      {error && (
        <p id={`${name}-error`} className="mt-1.5 text-xs text-rose-600">
          {error}
        </p>
      )}
    </div>
  );
}

"use client";

import { useState, type FormEvent, type JSX } from "react";
import { SITE } from "@/data/site";
import { useLocale } from "@/context/LocaleContext";
import "./contact.desktop.css";
import "./contact.mobile.css";

type FieldName =
  | "Name"
  | "Phone"
  | "Email"
  | "Address"
  | "Project details"
  | "Start date";

type FormState = Record<FieldName, string>;

const INITIAL: FormState = {
  Name: "",
  Phone: "",
  Email: "",
  Address: "",
  "Project details": "",
  "Start date": "",
};

export const Contact = (): JSX.Element => {
  const { dictionary } = useLocale();
  const { contact } = dictionary;
  const [values, setValues] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const nextErrors: Partial<Record<FieldName, string>> = {};
    const body: string[] = [];

    (Object.keys(values) as FieldName[]).forEach((key) => {
      const value = values[key].trim();
      const invalidPhone =
        key === "Phone" && value.replace(/\D/g, "").length < 7;
      const invalidEmail =
        key === "Email" && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value);
      const bad = !value || invalidPhone || invalidEmail;

      if (bad) {
        nextErrors[key] = contact.form.requiredError;
      }

      body.push(`${key}: ${value}`);
    });

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus(contact.form.fixFields);
      return;
    }

    setSending(true);
    setStatus("");

    window.setTimeout(() => {
      const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent(
        "Free quote request",
      )}&body=${encodeURIComponent(body.join("\n"))}`;
      window.location.href = mailto;
      setSending(false);
      setStatus(contact.form.success);
    }, 400);
  };

  return (
    <section id="contact">
      <div className="wrap contact__g">
        <div>
          <span className="eyebrow">{contact.eyebrow}</span>
          <h2>{contact.title}</h2>
          <dl>
            <dt>{contact.emailLabel}</dt>
            <dd>
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </dd>
            <dt>{contact.phoneLabel}</dt>
            <dd>
              <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>
            </dd>
            <dt>{contact.locationLabel}</dt>
            <dd>{SITE.location}</dd>
          </dl>
        </div>
        <form id="f" noValidate onSubmit={onSubmit}>
          <label>
            {contact.form.name}*
            <input
              name="Name"
              required
              autoComplete="name"
              value={values.Name}
              aria-invalid={Boolean(errors.Name)}
              onChange={(event) =>
                setValues((prev) => ({ ...prev, Name: event.target.value }))
              }
            />
            <span className="err">{errors.Name ?? ""}</span>
          </label>
          <label>
            {contact.form.phone}*
            <input
              name="Phone"
              type="tel"
              required
              autoComplete="tel"
              value={values.Phone}
              aria-invalid={Boolean(errors.Phone)}
              onChange={(event) =>
                setValues((prev) => ({ ...prev, Phone: event.target.value }))
              }
            />
            <span className="err">{errors.Phone ?? ""}</span>
          </label>
          <label>
            {contact.form.email}*
            <input
              name="Email"
              type="email"
              required
              autoComplete="email"
              value={values.Email}
              aria-invalid={Boolean(errors.Email)}
              onChange={(event) =>
                setValues((prev) => ({ ...prev, Email: event.target.value }))
              }
            />
            <span className="err">{errors.Email ?? ""}</span>
          </label>
          <label>
            {contact.form.address}*
            <input
              name="Address"
              required
              autoComplete="street-address"
              value={values.Address}
              aria-invalid={Boolean(errors.Address)}
              onChange={(event) =>
                setValues((prev) => ({ ...prev, Address: event.target.value }))
              }
            />
            <span className="err">{errors.Address ?? ""}</span>
          </label>
          <label className="full">
            {contact.form.details}*
            <textarea
              name="Project details"
              rows={4}
              required
              value={values["Project details"]}
              aria-invalid={Boolean(errors["Project details"])}
              onChange={(event) =>
                setValues((prev) => ({
                  ...prev,
                  "Project details": event.target.value,
                }))
              }
            />
            <span className="err">{errors["Project details"] ?? ""}</span>
          </label>
          <label className="full">
            {contact.form.startDate}*
            <input
              name="Start date"
              type="date"
              required
              value={values["Start date"]}
              aria-invalid={Boolean(errors["Start date"])}
              onChange={(event) =>
                setValues((prev) => ({
                  ...prev,
                  "Start date": event.target.value,
                }))
              }
            />
            <span className="err">{errors["Start date"] ?? ""}</span>
          </label>
          <button className="btn full" id="sb" type="submit" disabled={sending}>
            {sending ? contact.form.sending : contact.form.submit}
          </button>
          <p id="fs" role="status" aria-live="polite">
            {status}
          </p>
        </form>
      </div>
    </section>
  );
};

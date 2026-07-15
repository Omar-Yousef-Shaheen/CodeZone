import { ArrowUpRight, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import type { FormEvent } from "react";
import { profile } from "../data/profile";
import { ContactIcon } from "./Icon";

type FieldName = "name" | "email" | "projectType" | "message";
type FormErrors = Partial<Record<FieldName, string>>;

const projectTypes = [
  "WordPress Website",
  "WooCommerce Store",
  "Shopify Store",
  "Frontend Development",
  "Speed Optimization",
  "Website Redesign",
];

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [errors, setErrors] = useState<FormErrors>({});

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const values = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      projectType: String(formData.get("projectType") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };

    const nextErrors: FormErrors = {};
    if (values.name.length < 2) nextErrors.name = "Enter your name using at least 2 characters.";
    if (!emailPattern.test(values.email)) nextErrors.email = "Enter a valid email address, such as name@example.com.";
    if (!projectTypes.includes(values.projectType)) nextErrors.projectType = "Choose a project type from the list.";
    if (values.message.length < 10) nextErrors.message = "Tell me a little more about the project (at least 10 characters).";

    setErrors(nextErrors);
    const firstInvalidField = (Object.keys(nextErrors) as FieldName[])[0];
    if (firstInvalidField) {
      (form.elements.namedItem(firstInvalidField) as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null)?.focus();
      return;
    }

    const message = [
      "Hello Omar,",
      "",
      "I would like to discuss a project.",
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      `Project Type: ${values.projectType}`,
      "",
      "Message:",
      values.message,
    ].join("\n");

    window.open(`https://wa.me/201141214658?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="shell contact-shell">
        <div className="contact-copy">
          <p className="eyebrow">Contact</p>
          <h2>Have a website in mind? Let’s talk through the next step.</h2>
          <p>
            WhatsApp is the fastest way to reach me. You can also email me directly or use the form to prepare a complete project message.
          </p>

          <div className="contact-methods">
            <a className="contact-method contact-method-primary" href={profile.whatsappUrl} target="_blank" rel="noopener noreferrer">
              <span><MessageCircle aria-hidden="true" /></span>
              <div><small>Primary contact</small><strong>{profile.phone}</strong></div>
              <ArrowUpRight aria-hidden="true" />
            </a>
            <a className="contact-method" href={`mailto:${profile.email}`}>
              <span><Mail aria-hidden="true" /></span>
              <div><small>Email</small><strong>{profile.email}</strong></div>
              <ArrowUpRight aria-hidden="true" />
            </a>
          </div>

          <p className="availability"><MapPin aria-hidden="true" />{profile.location}</p>

          <div className="contact-socials" aria-label="Social profiles">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Omar Yousef on LinkedIn">
              <ContactIcon name="linkedin" /> LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="Omar Yousef on GitHub">
              <ContactIcon name="github" /> GitHub
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate aria-label="Project enquiry form">
          <div className="form-heading">
            <span><Send aria-hidden="true" /></span>
            <div><p className="mini-label">Project enquiry</p><h3>Send details via WhatsApp</h3></div>
          </div>

          <div className="field-group">
            <label htmlFor="contact-name">Name</label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              required
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "name-error" : undefined}
              placeholder="Your name"
              onBlur={() => errors.name && setErrors((current) => ({ ...current, name: undefined }))}
            />
            {errors.name ? <p id="name-error" className="field-error" role="alert">{errors.name}</p> : null}
          </div>

          <div className="field-group">
            <label htmlFor="contact-email">Email</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              required
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
              placeholder="you@example.com"
              onBlur={() => errors.email && setErrors((current) => ({ ...current, email: undefined }))}
            />
            {errors.email ? <p id="email-error" className="field-error" role="alert">{errors.email}</p> : null}
          </div>

          <div className="field-group">
            <label htmlFor="contact-project-type">Project Type</label>
            <select
              id="contact-project-type"
              name="projectType"
              defaultValue=""
              required
              aria-invalid={Boolean(errors.projectType)}
              aria-describedby={errors.projectType ? "project-type-error" : undefined}
              onBlur={() => errors.projectType && setErrors((current) => ({ ...current, projectType: undefined }))}
            >
              <option value="" disabled>Select a project type</option>
              {projectTypes.map((type) => <option key={type} value={type}>{type}</option>)}
            </select>
            {errors.projectType ? <p id="project-type-error" className="field-error" role="alert">{errors.projectType}</p> : null}
          </div>

          <div className="field-group">
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              required
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
              placeholder="Tell me about the website, the current situation, and what you need."
              onBlur={() => errors.message && setErrors((current) => ({ ...current, message: undefined }))}
            />
            {errors.message ? <p id="message-error" className="field-error" role="alert">{errors.message}</p> : null}
          </div>

          <button type="submit" className="btn btn-primary form-submit">
            Open WhatsApp Message <MessageCircle aria-hidden="true" />
          </button>
          <p className="form-note">Submitting opens WhatsApp with your message ready to review and send.</p>
        </form>
      </div>
    </section>
  );
}

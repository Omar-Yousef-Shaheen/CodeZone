import { ArrowRight } from "lucide-react";
import { profile } from "../data/profile";
import { ContactIcon } from "./Icon";

type ContactButton = {
  label: string;
  icon: string;
  href?: string;
  value: string;
};

const contactButtons: ContactButton[] = [
  { label: "Email", icon: "email", href: `mailto:${profile.email}`, value: profile.email },
  { label: "Phone", icon: "phone", href: `tel:${profile.phone.replace(/\s/g, "")}`, value: profile.phone },
  { label: "Location", icon: "location", value: "Based in Worldwide" },
];

const socialButtons = [
  { label: "GitHub", icon: "github", href: profile.github },
  { label: "LinkedIn", icon: "linkedin", href: profile.linkedin },
  { label: "Email", icon: "email", href: `mailto:${profile.email}` },
];

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="glass-panel mx-auto grid max-w-[1180px] gap-8 rounded-lg px-5 py-7 sm:px-7 md:grid-cols-[0.9fr_1.1fr] md:p-9 lg:p-10">
        <div>
          <p className="eyebrow mb-5 w-fit">Let's Work Together</p>
          <h2 className="max-w-xl text-[30px] font-medium leading-tight text-navy sm:text-4xl md:text-[42px]">
            Ready to upgrade your website?
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-7 text-ink md:text-base">
            Send the project type, current website if you have one, and the goal you want the new version to achieve.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {contactButtons.map((item) =>
              item.href ? (
                <a key={item.label} className="contact-chip" href={item.href}>
                  <ContactIcon name={item.icon} className="size-4 text-cyan-200" />
                  {item.value}
                </a>
              ) : (
                <span key={item.label} className="contact-chip">
                  <ContactIcon name={item.icon} className="size-4 text-cyan-200" />
                  {item.value}
                </span>
              ),
            )}
          </div>

          <div className="mt-8 flex gap-3">
            {socialButtons.map((item) => (
              <a key={item.label} className="contact-icon" href={item.href} aria-label={item.label} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                <ContactIcon name={item.icon} className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <form className="rounded-lg border border-line bg-white p-5 shadow-card md:p-6" aria-label="Static contact form">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="field-label">
              Your Name
              <input className="field" type="text" name="name" placeholder="Enter your name" />
            </label>
            <label className="field-label">
              Your Email
              <input className="field" type="email" name="email" placeholder="Enter your email" />
            </label>
          </div>
          <label className="field-label mt-5">
            Project Type
            <select className="field" name="projectType" defaultValue="">
              <option value="" disabled>
                Select project type
              </option>
              <option>WordPress Website</option>
              <option>Shopify Store</option>
              <option>WooCommerce Store</option>
              <option>Frontend / Static Website</option>
              <option>Performance or UI Improvement</option>
            </select>
          </label>
          <label className="field-label mt-5">
            Message
            <textarea className="field min-h-32 resize-y" name="message" placeholder="Tell me about your project..." />
          </label>
          <button className="btn btn-primary mt-6 w-full" type="button" aria-disabled="true">
            Send Message
            <ArrowRight className="size-4" />
          </button>
        </form>
      </div>
    </section>
  );
}

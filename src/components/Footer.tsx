import { profile } from "../data/profile";
import { ContactIcon } from "./Icon";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { label: "GitHub", href: profile.github, icon: "github" },
  { label: "LinkedIn", href: profile.linkedin, icon: "linkedin" },
  { label: "Email", href: `mailto:${profile.email}`, icon: "email" },
];

export default function Footer() {
  return (
    <footer className="px-4 pb-8 sm:px-6 md:px-8">
      <div className="glass-panel mx-auto max-w-[1180px] rounded-lg px-5 py-8 md:px-8">
        <div className="grid gap-9 md:grid-cols-[1.25fr_1fr_1fr]">
          <div>
            <a href="#home" className="logo-lockup" aria-label={`${profile.brandName} home`}>
              <span className="logo-mark">CZ</span>
              <span className="logo-text">CodeWithCZ</span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-7 text-ink">
              Building modern, fast, and useful websites for brands that need a stronger digital presence.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-navy">Quick Links</h3>
            <nav className="mt-4 grid grid-cols-2 gap-x-8 gap-y-3 text-sm" aria-label="Footer">
              {footerLinks.map((link) => (
                <a key={link.href} className="text-ink transition hover:text-royal" href={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-bold text-navy">Stay Connected</h3>
            <p className="mt-4 text-sm text-ink">Let's connect on social media.</p>
            <div className="mt-5 flex gap-3">
              {socialLinks.map((link) => (
                <a key={link.label} className="contact-icon" href={link.href} aria-label={link.label} target={link.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                  <ContactIcon name={link.icon} className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-8 border-t border-line pt-5 text-sm text-muted">
          Copyright {new Date().getFullYear()} {profile.brandName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

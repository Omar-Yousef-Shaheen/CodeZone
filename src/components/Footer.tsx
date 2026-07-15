import { Mail, MessageCircle } from "lucide-react";
import { profile } from "../data/profile";
import { ContactIcon } from "./Icon";
import Logo from "./Logo";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <a href="#home" className="logo-lockup" aria-label="Omar Yousef - home"><Logo /></a>
          <p>Frontend development and WordPress expertise for responsive, performance-minded business and e-commerce websites.</p>
        </div>
        <nav className="footer-nav" aria-label="Footer navigation">
          <h2>Navigate</h2>
          <div>{footerLinks.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}</div>
        </nav>
        <div className="footer-contact">
          <h2>Get in touch</h2>
          <a href={profile.whatsappUrl} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden="true" />{profile.phone}</a>
          <a href={`mailto:${profile.email}`}><Mail aria-hidden="true" />{profile.email}</a>
          <div className="footer-socials">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Omar Yousef on LinkedIn"><ContactIcon name="linkedin" /></a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="Omar Yousef on GitHub"><ContactIcon name="github" /></a>
          </div>
        </div>
      </div>
      <div className="shell footer-bottom">
        <p>Copyright 2026 Omar Yousef. All rights reserved.</p>
        <a href="#home">Back to top</a>
      </div>
    </footer>
  );
}

import { Mail, MessageCircle } from "lucide-react";
import { navigationItems } from "../data/navigation";
import { profile } from "../data/profile";
import { en } from "../i18n/locales/en";
import { useI18n } from "../i18n/useI18n";
import { handleSectionNavigation } from "../utils/sectionNavigation";
import { ContactIcon } from "./Icon";
import Logo from "./Logo";

export default function Footer() {
  const { dictionary } = useI18n();

  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <a
            href="#home"
            className="logo-lockup"
            aria-label={dictionary.brand.homeLinkLabel}
            onClick={handleSectionNavigation}
          >
            <Logo />
          </a>
          <p>Frontend development and WordPress expertise for responsive, performance-minded business and e-commerce websites.</p>
        </div>
        <nav className="footer-nav" aria-label="Footer navigation">
          <h2>Navigate</h2>
          <div>
            {navigationItems.map((item) => (
              <a key={item.id} href={item.href} onClick={handleSectionNavigation}>
                {en.navigation[item.labelKey]}
              </a>
            ))}
          </div>
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
        <a href="#home" onClick={handleSectionNavigation}>Back to top</a>
      </div>
    </footer>
  );
}

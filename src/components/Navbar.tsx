import { Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { navigationItems } from "../data/navigation";
import { profile } from "../data/profile";
import { useI18n } from "../i18n/useI18n";
import { handleSectionNavigation } from "../utils/sectionNavigation";
import Logo from "./Logo";

export default function Navbar() {
  const { dictionary, locale, setLocale } = useI18n();
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null);
  const targetLocale = locale === "en" ? "ar" : "en";

  useEffect(() => {
    if (!open) return;
    firstMobileLinkRef.current?.focus();

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [open]);

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label={dictionary.navbar.navigationLabel}>
        <a
          href="#home"
          className="logo-lockup"
          aria-label={dictionary.brand.homeLinkLabel}
          onClick={handleSectionNavigation}
        >
          <Logo variant="horizontal" className="navbar-logo-horizontal" />
          <Logo variant="mark" className="navbar-logo-mark" />
        </a>

        <div className="desktop-nav">
          {navigationItems.map((item) => (
            <a
              key={item.id}
              className="nav-link"
              href={item.href}
              onClick={handleSectionNavigation}
            >
              {dictionary.navigation[item.labelKey]}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <div
            className="language-control"
            role="group"
            aria-label={dictionary.languageSwitcher.label}
          >
            <span id="current-language" className="sr-only" aria-live="polite">
              {dictionary.languageSwitcher.currentLanguage}
            </span>
            <button
              className="language-switcher"
              type="button"
              aria-label={dictionary.languageSwitcher.switchLanguage}
              aria-describedby="current-language"
              onClick={() => setLocale(targetLocale)}
            >
              <span lang={targetLocale} dir={targetLocale === "ar" ? "rtl" : "ltr"}>
                {dictionary.languageSwitcher.targetLanguage}
              </span>
            </button>
          </div>
          <a
            className="btn btn-small btn-primary nav-cta"
            href={profile.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={dictionary.navbar.ctaAriaLabel}
          >
            <MessageCircle aria-hidden="true" />
            {dictionary.navbar.cta}
          </a>
          <button
            ref={menuButtonRef}
            className="menu-button"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? dictionary.navbar.closeMenu : dictionary.navbar.openMenu}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <nav
        id="mobile-menu"
        className={`mobile-menu ${open ? "is-open" : ""}`}
        aria-label={dictionary.navbar.mobileNavigationLabel}
        aria-hidden={!open}
      >
        <div className="mobile-menu-inner">
          {navigationItems.map((item, index) => (
            <a
              key={item.id}
              ref={index === 0 ? firstMobileLinkRef : undefined}
              className="mobile-nav-link"
              href={item.href}
              tabIndex={open ? 0 : -1}
              onClick={(event) => {
                handleSectionNavigation(event, { onNavigate: () => setOpen(false) });
              }}
            >
              {dictionary.navigation[item.labelKey]}
            </a>
          ))}
          <a
            className="btn btn-primary mobile-project-cta"
            href={profile.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={open ? 0 : -1}
            aria-label={dictionary.navbar.ctaAriaLabel}
          >
            <MessageCircle aria-hidden="true" />
            {dictionary.navbar.cta}
          </a>
        </div>
      </nav>
    </header>
  );
}

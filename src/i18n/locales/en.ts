import type { Dictionary } from "../types";

export const en = {
  languages: {
    en: "English",
    ar: "Arabic",
  },
  languageSwitcher: {
    label: "Choose language",
    currentLanguage: "Current language: English",
    switchLanguage: "Switch to Arabic",
    targetLanguage: "العربية",
  },
  actions: {
    openLink: "Open link",
    openLinkInNewTab: "Open link in a new tab",
    closeMenu: "Close menu",
    backToTop: "Back to top",
  },
  brand: {
    studioName: "CZ Pixel",
    developerName: "Omar Yousef",
    developerAttribution: "Omar Yousef, the developer behind CZ Pixel.",
    logoAlt: "CZ Pixel logo",
    homeLinkLabel: "CZ Pixel home",
  },
  navbar: {
    navigationLabel: "Primary navigation",
    mobileNavigationLabel: "Mobile navigation",
    openMenu: "Open navigation menu",
    closeMenu: "Close navigation menu",
    cta: "Start a Project",
    ctaAriaLabel: "Start a project with CZ Pixel on WhatsApp",
  },
  hero: {
    eyebrow: "INDEPENDENT DIGITAL COMMERCE STUDIO",
    heading: {
      leading: "E-commerce experiences built to look better,",
      emphasis: "load faster, and sell smarter.",
    },
    description:
      "CZ Pixel is led and developed by Omar Yousef, building and improving Shopify, WooCommerce, and frontend experiences for ambitious brands and collaborative teams.",
    actionsLabel: "Hero actions",
    primaryCta: "Start a Project",
    primaryCtaAriaLabel: "Start a project with CZ Pixel on WhatsApp",
    secondaryCta: "Explore Selected Work",
    secondaryCtaAriaLabel: "Explore selected CZ Pixel projects",
    cvLink: "Hiring? View my CV",
    cvLinkAriaLabel: "Download Omar Yousef's CV as a PDF",
    metricsLabel: "Portfolio metrics",
    metrics: [
      { value: "50+", label: "Websites Built & Improved" },
      { value: "30+", label: "Clients & Brands Supported" },
      { value: "2+", label: "Years of Experience" },
    ],
  },
  navigation: {
    home: "Home",
    about: "About",
    experience: "Experience",
    projects: "Projects",
    services: "Services",
    process: "Process",
    contact: "Contact",
  },
} satisfies Dictionary;

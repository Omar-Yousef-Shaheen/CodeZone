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
    eyebrow: "Independent Digital Commerce Studio",
    heading: {
      leading: "Websites & stores built for modern brands.",
      emphasis: "Designed better. Built faster.",
    },
    description:
      "I build and improve Shopify, WooCommerce, and frontend experiences for growing brands.",
    actionsLabel: "Hero actions",
    primaryCta: "Start Your Project",
    primaryCtaAriaLabel: "Start your project with CZ Pixel on WhatsApp",
    secondaryCta: "Explore Projects",
    secondaryCtaAriaLabel: "Explore CZ Pixel projects",
    cvLink: "Download My CV",
    cvLinkAriaLabel: "Download Omar Yousef's CV as a PDF",
    metricsLabel: "Portfolio metrics",
    metrics: [
      { value: "50+", label: "Websites Built & Improved" },
      { value: "30+", label: "Clients & Brands Supported" },
      { value: "2+", label: "Years Of Experience" },
    ],
  },
  trustedBrands: {
    logoListLabel: "Brands and teams that have worked with CZ Pixel",
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

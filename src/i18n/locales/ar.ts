import type { Dictionary } from "../types";

export const ar = {
  languages: {
    en: "الإنجليزية",
    ar: "العربية",
  },
  languageSwitcher: {
    label: "اختيار اللغة",
    currentLanguage: "اللغة الحالية: العربية",
    switchLanguage: "التبديل إلى اللغة الإنجليزية",
    targetLanguage: "EN",
  },
  actions: {
    openLink: "فتح الرابط",
    openLinkInNewTab: "فتح الرابط في علامة تبويب جديدة",
    closeMenu: "إغلاق القائمة",
    backToTop: "العودة إلى أعلى الصفحة",
  },
  brand: {
    studioName: "CZ Pixel",
    developerName: "عمر يوسف",
    developerAttribution: "عمر يوسف، المطوّر الذي يقف خلف CZ Pixel.",
    logoAlt: "شعار CZ Pixel",
    homeLinkLabel: "العودة إلى الصفحة الرئيسية لـ CZ Pixel",
  },
  navbar: {
    navigationLabel: "التنقل الرئيسي",
    mobileNavigationLabel: "التنقل على الهاتف",
    openMenu: "فتح قائمة التنقل",
    closeMenu: "إغلاق قائمة التنقل",
    cta: "ابدأ مشروعك",
    ctaAriaLabel: "ابدأ مشروعك مع CZ Pixel عبر واتساب",
  },
  hero: {
    eyebrow: "استوديو مستقل للتجارة الإلكترونية",
    heading: {
      leading: "نبني تجارب تجارة إلكترونية بشكل أفضل،",
      emphasis: "وسرعة أعلى، تساعدك تبيع بذكاء.",
    },
    description:
      "CZ Pixel استوديو يقوده ويطوره عمر يوسف، متخصص في بناء وتطوير متاجر Shopify وWooCommerce وتجارب الواجهات للبراندات الطموحة وفرق العمل.",
    actionsLabel: "إجراءات القسم الرئيسي",
    primaryCta: "ابدأ مشروعك",
    primaryCtaAriaLabel: "ابدأ مشروعك مع CZ Pixel عبر واتساب",
    secondaryCta: "استكشف أعمالي",
    secondaryCtaAriaLabel: "استكشف مشاريع CZ Pixel المختارة",
    cvLink: "للتوظيف: شاهد سيرتي الذاتية",
    cvLinkAriaLabel: "تنزيل السيرة الذاتية لعمر يوسف بصيغة PDF",
    metricsLabel: "إحصائيات الأعمال",
    metrics: [
      { value: "50+", label: "موقع ومتجر تم بناؤه وتطويره" },
      { value: "30+", label: "عميل وبراند تم دعمهم" },
      { value: "2+", label: "سنوات من الخبرة" },
    ],
  },
  navigation: {
    home: "الرئيسية",
    about: "من نحن",
    experience: "الخبرات",
    projects: "المشاريع",
    services: "الخدمات",
    process: "طريقة العمل",
    contact: "تواصل معنا",
  },
} satisfies Dictionary;

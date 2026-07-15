export const services = [
  {
    title: "WordPress & WooCommerce",
    description:
      "Responsive business websites and online stores built or improved with WordPress, WooCommerce, Elementor, and Elementor Pro.",
    tags: ["WordPress", "WooCommerce", "Elementor Pro"],
    icon: "wordpress",
  },
  {
    title: "Shopify",
    description:
      "Shopify storefront implementation and improvements with organized collections, clear product pages, and mobile-ready shopping flows.",
    tags: ["Shopify", "Storefronts", "Responsive UI"],
    icon: "store",
  },
  {
    title: "Frontend Development",
    description:
      "Clean, responsive interfaces implemented with HTML, CSS, JavaScript, and React for marketing, business, and e-commerce pages.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    icon: "code",
  },
  {
    title: "Website Speed Optimization",
    description:
      "Practical performance work covering asset delivery, page weight, layout stability, and front-end cleanup for smoother websites.",
    tags: ["Performance", "Core UX", "Asset Cleanup"],
    icon: "speed",
  },
  {
    title: "Website Redesign & UI Improvements",
    description:
      "Focused redesigns that improve hierarchy, readability, responsive behavior, and the clarity of important user journeys.",
    tags: ["Redesign", "Responsive UI", "Usability"],
    icon: "redesign",
  },
];

export type Service = (typeof services)[number];

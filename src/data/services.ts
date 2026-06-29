export const services = [
  {
    title: "WordPress Websites",
    kicker: "Built for performance",
    description:
      "Responsive WordPress websites with Elementor, Elementor Pro, clean layouts, SEO basics, and performance-minded structure.",
    tags: ["WordPress", "Elementor", "SEO Basics"],
    icon: "wordpress",
  },
  {
    title: "eCommerce Stores",
    kicker: "Designed to sell",
    description:
      "WooCommerce and Shopify storefront work focused on responsive pages, clearer journeys, and stronger user experience.",
    tags: ["WooCommerce", "Shopify", "Responsive UI"],
    icon: "store",
  },
  {
    title: "Frontend Development",
    kicker: "Clean custom code",
    description:
      "Frontend layouts using HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, and React.js basics for polished static experiences.",
    tags: ["HTML", "CSS", "JavaScript"],
    icon: "code",
  },
];

export type Service = (typeof services)[number];

export const skillGroups = [
  {
    title: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Tailwind CSS", "React.js Basics"],
  },
  {
    title: "CMS & Builders",
    skills: ["WordPress", "WooCommerce", "Shopify", "Elementor Pro", "WPBakery"],
  },
  {
    title: "Optimization & UX",
    skills: ["Responsive Design", "Performance Optimization", "SEO Basics", "UI Improvements"],
  },
];

export const coreSkills = [
  { name: "WordPress", label: "95%", level: 95, icon: "wordpress" },
  { name: "HTML5", label: "95%", level: 95, icon: "html" },
  { name: "CSS3", label: "90%", level: 90, icon: "css" },
  { name: "JavaScript", label: "85%", level: 85, icon: "javascript" },
  { name: "Shopify", label: "90%", level: 90, icon: "shopify" },
  { name: "WooCommerce", label: "90%", level: 90, icon: "woocommerce" },
  { name: "Elementor Pro", label: "90%", level: 90, icon: "elementor" },
];

export type SkillGroup = (typeof skillGroups)[number];
export type CoreSkill = (typeof coreSkills)[number];

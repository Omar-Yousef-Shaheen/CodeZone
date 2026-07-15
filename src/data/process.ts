export const processSteps = [
  {
    number: "01",
    title: "Discovery",
    icon: "search",
    description: "Clarify the audience, goals, content, current challenges, and the scope needed for the project.",
  },
  {
    number: "02",
    title: "Design",
    icon: "pen",
    description: "Shape the page structure and visual direction around clear content, usability, and brand consistency.",
  },
  {
    number: "03",
    title: "Development",
    icon: "code",
    description: "Build responsive pages in WordPress, WooCommerce, Shopify, or frontend code, based on the agreed scope.",
  },
  {
    number: "04",
    title: "Launch",
    icon: "rocket",
    description: "Review key pages, devices, links, and performance before publishing or handing the work back to your team.",
  },
];

export type ProcessStep = (typeof processSteps)[number];

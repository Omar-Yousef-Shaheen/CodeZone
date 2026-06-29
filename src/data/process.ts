export const processSteps = [
  {
    number: "01",
    title: "Discovery",
    icon: "search",
    description: "Understand goals, audience, website needs, and project requirements before shaping the solution.",
  },
  {
    number: "02",
    title: "Design",
    icon: "pen",
    description: "Create a clear, modern layout focused on responsive usability, clarity, and conversion.",
  },
  {
    number: "03",
    title: "Development",
    icon: "code",
    description: "Build the website with WordPress, Elementor, Shopify, or frontend code based on the project scope.",
  },
  {
    number: "04",
    title: "Launch",
    icon: "rocket",
    description: "Test responsiveness, improve performance, and prepare the site for publishing online.",
  },
];

export type ProcessStep = (typeof processSteps)[number];

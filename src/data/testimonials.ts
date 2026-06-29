export const testimonials = [
  {
    name: "James Carter",
    role: "Founder, Elevate Co.",
    quote:
      "CodeWithCZ delivered a fantastic website that exceeded our expectations. Highly professional and easy to work with.",
    placeholder: false,
  },
  {
    name: "Sarah Mitchell",
    role: "Marketing Manager",
    quote:
      "Great communication, attention to detail and on-time delivery. I'll definitely work with him again.",
    placeholder: false,
  },
  {
    name: "David Lee",
    role: "CEO, DLM Solutions",
    quote:
      "Our new site is fast, responsive and beautiful. He brought our vision to life perfectly.",
    placeholder: false,
  },
];

export type Testimonial = (typeof testimonials)[number];

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#F7FAFA",
        mist: "#E8F8F5",
        frost: "#FFFFFF",
        navy: "#101828",
        ink: "#475467",
        muted: "#667085",
        line: "rgba(16, 24, 40, 0.10)",
        royal: "#007A78",
        cobalt: "#005B5F",
        deepblue: "#101828",
        sky: "#00B8C4",
        steel: "#475467",
        gold: "#E8F8F5",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Sora", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 20px 50px rgba(0, 184, 196, 0.12)",
        card: "0 18px 48px rgba(16, 24, 40, 0.08)",
      },
    },
  },
  plugins: [],
};

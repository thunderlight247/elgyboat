import type { Config } from "tailwindcss";

// Palette sampled from the Elgyboat logo: deep teal-navy swirl + bright teal wordmark.
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0D2B3A", // darkest brand navy, dark sections and body text
        navy: "#17506B", // logo swirl
        teal: { DEFAULT: "#1FA9A8", deep: "#0C7C7E", soft: "#7FD0CF" }, // logo wordmark / fan
        mist: "#EAF4F4",
        paper: "#F7F9F9",
        line: "#D5E3E4",
        muted: "#4B6068",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      maxWidth: { page: "72rem" },
    },
  },
  plugins: [],
};
export default config;

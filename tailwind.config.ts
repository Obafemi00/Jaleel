import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        navy: {
          DEFAULT: "#0A1A2F",
          dark: "#050E1A",
          light: "#1A2F4F",
        },
        gold: {
          DEFAULT: "#D4AF37",
          light: "#E5C158",
          dark: "#B8941F",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "ui-sans-serif", "system-ui"],
        display: ["var(--font-display)", "Space Grotesk", "ui-sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;



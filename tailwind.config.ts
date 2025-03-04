import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["var(--font-oswald)"],
        secondary: ["var(--font-openSans)"],
      },
      backgroundImage: {
        hero: "url('/img/hero_bg.jpg')",
      },
      colors: {
        background: "#070707",
        foreground: "#050505",
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#0A0A0A",
        },
        popover: {
          DEFAULT: "#FFFFFF",
          foreground: "#0A0A0A",
        },
        primary: {
          DEFAULT: "#FCE219",
          foreground: "#FAFAFA",
        },
        secondary: {
          DEFAULT: "#FFFAE8",
          foreground: "#1A1A1A",
        },
        black: {
          DEFAULT: "#020202",
          foreground: "#1A1A1A",
        },
        muted: {
          DEFAULT: "#F4F4F5",
          foreground: "#737373",
        },
        white: {
          DEFAULT: "#F6F6F6",
          foreground: "#1A1A1A",
        },
        destructive: {
          DEFAULT: "#EF4444",
          foreground: "#FAFAFA",
        },
        border: "#E5E5E5",
        input: "#E5E5E5",
        ring: "#0A0A0A",
        chart: {
          "1": "#F97316",
          "2": "#14B8A6",
          "3": "#0F766E",
          "4": "#EAB308",
          "5": "#FB923C",
        },
      },
    },
  },
} satisfies Config;

import type { Config } from "tailwindcss";

export default {
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
        pink: "#FF029C",
        pinkHover: "#FF4EBA",
        darkHero: "#090408",
      },
      screens: {
        xs: "320px",
        xsm: "400px",
        mLg: "918px",
        xxl: "1600px",
        xzl: "1500px",
        xsl: "1400px"
      },
    },
  },
  plugins: [],
} satisfies Config;

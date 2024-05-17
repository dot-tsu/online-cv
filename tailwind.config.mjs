/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      primary: "#232121",
      secondary: "#434040",
      muted: "#5E5A5A",
      background: "#F5F3F0",
      surface: "#CDCBCB",
      accent: "#00ABE7",
    },
    fontFamily: {
      sans: ["Miriam Libre", "sans-serif"],
      print: ["Arial", "sans-serif"],
    },
  },
  plugins: [],
};

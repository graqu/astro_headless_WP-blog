/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        rotte: "red",
      },
      fontSize: {
        base: "36px",
      },
      fontFamily: {},
    },
  },
};

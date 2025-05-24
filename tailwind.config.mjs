/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,js,ts,jsx,tsx,md}", "./public/**/*.html"],
  theme: {
    extend: {
      colors: {
        primary: "red",
      },
    },
  },
  plugins: [],
};

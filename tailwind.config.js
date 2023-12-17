/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#022959",
        "light-gray": "#9699AA",
      },
    },
  },
  plugins: [],
};

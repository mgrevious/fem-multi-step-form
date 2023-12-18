/** @type {import('tailwindcss').Config} */
import theme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#022959",
        "medium-gray": "#9699AA",
        "light-gray": "#F8F9FF",
      },
      fontFamily: {
        sans: ['"Ubuntu"', ...theme.fontFamily.sans],
      },
    },
  },
  plugins: [forms],
};

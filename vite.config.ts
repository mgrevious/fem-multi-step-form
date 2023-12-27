import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://mgrevious.github.io/fem-multi-step-form/",
  plugins: [react()],
});

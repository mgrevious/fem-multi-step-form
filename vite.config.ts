import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  if (mode === "development") {
    return {
      base: "/",
      plugins: [react()],
    };
  }
  return {
    base: "/fem-multi-step-form/",
    plugins: [react()],
  };
});

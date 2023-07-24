import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://milogodoy.github.io/",
  plugins: [react()],
  resolve: {
    alias: {
      "@/Components": "/src/Components",
    },
  },
});

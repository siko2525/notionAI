import path from "path";
import tailwindcss from "tailwindcss";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    include: [
      "react/jsx-runtime",
      "react-dom",
      "react-router-dom",
      "react-router",
      "react-redux",
      "redux",
      "redux-thunk",
    ],
  },
});

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // IMPORTANT for GitHub Pages:
  // If this repo is "anudeep-kolluri-website" under your account,
  // your site will live at: https://<username>.github.io/anudeep-kolluri-website/
  // so the base must be "/anudeep-kolluri-website/" in production.
  base: mode === "production" ? "/personal-website/" : "/",
}));

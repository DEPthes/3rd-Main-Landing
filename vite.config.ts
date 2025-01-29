import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

import * as path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    host: "0.0.0.0",
    port: 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@constants": path.resolve(__dirname, "./src/constants"),
    },
  },
  build: {
    chunkSizeWarningLimit: 600,
  },
});

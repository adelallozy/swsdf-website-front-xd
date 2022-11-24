import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import path from 'path';

export default defineConfig({
  server: {
    port: 3000,
    host: "0.0.0.0",
    hmr: {
      clientPort: 3000,
    },
  },
  plugins: [vue()],
  resolve: {
    alias: {
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "~": fileURLToPath(new URL("./node_modules", import.meta.url)),
    },
  },
  build: {
    chunkSizeWarningLimit: 600,
    cssCodeSplit: false
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import "@/style/_variables.scss"; 
        @import "@/style/_mixins.scss";`,
      },
    },
  },
});

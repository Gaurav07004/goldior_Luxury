import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://website-backend-1-a73j.onrender.com",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});

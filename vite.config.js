import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react-swc";
import dotenv from "dotenv";

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": process.env,
  },
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@api": path.resolve(__dirname, "src/api"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@layouts": path.resolve(__dirname, "src/layouts"),
      "@config": path.resolve(__dirname, "src/config"),
      "@context": path.resolve(__dirname, "src/context"),
      "@test": path.resolve(__dirname, "src/Test"),
    },
  },
});

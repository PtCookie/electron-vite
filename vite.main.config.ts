import { defineConfig } from "vite";

// https://vitejs.dev/config
export default defineConfig({
  build: {
    lib: { entry: "app/main.ts", formats: ["es"] },
  },
});

import { defineConfig } from "vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

// https://vitejs.dev/config
export default defineConfig({
  plugins: [
    TanStackRouterVite({
      routesDirectory: "./app/routes",
      generatedRouteTree: "./app/renderer/routeTree.gen.ts",
    }),
  ],
});

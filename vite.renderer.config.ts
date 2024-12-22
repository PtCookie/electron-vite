import { type ConfigEnv, defineConfig, type UserConfig } from "vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

import { pluginExposeRenderer } from "./vite.base.config";

// https://vitejs.dev/config
export default defineConfig((env) => {
  const forgeEnv = env as ConfigEnv<"renderer">;
  const { root, mode, forgeConfigSelf } = forgeEnv;
  const name = forgeConfigSelf.name ?? "";

  return {
    root,
    mode,
    base: "./",
    build: {
      outDir: `.vite/renderer/${name}`,
    },
    plugins: [
      pluginExposeRenderer(name),
      TanStackRouterVite({
        routesDirectory: "./app/routes",
        generatedRouteTree: "./app/renderer/routeTree.gen.ts",
      }),
    ],
    resolve: {
      preserveSymlinks: true,
    },
    clearScreen: false,
  } as UserConfig;
});

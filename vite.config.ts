import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Icons from "unplugin-icons/vite";
import { fileURLToPath } from "url";
import { promises } from "node:fs";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Icons({
      compiler: "jsx",
      jsx: "react",
      customCollections: {
        "local-icons": {
          "antd-vue": () =>
            promises.readFile("./src/assets/antd-vue-logo.svg", "utf-8"),
        },
      },
    }),
  ],
  base: "/demo",
  resolve: {
    // alias: {
    //   "/src": fileURLToPath(new URL("./src", import.meta.url)),
    // },
    // alias: [
    //   {
    //     find: "/src",
    //     replacement: fileURLToPath(new URL("./src", import.meta.url)),
    //   },
    // ],
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});

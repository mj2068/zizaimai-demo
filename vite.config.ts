import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import { fileURLToPath } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/demo/",
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
  },
});

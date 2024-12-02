import { defineConfig } from "vite";
import viteCompression from "vite-plugin-compression";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  build: {
    minify: "terser",
  },
  plugins: [viteCompression(), visualizer()],
});

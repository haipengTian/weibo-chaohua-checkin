import { fileURLToPath, URL } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
    // react-style-singleton (Radix scroll lock) reads this global at runtime.
    __webpack_nonce__: "globalThis.__weiboStyleNonce",
  },
  plugins: [tailwindcss()],
  resolve: { alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) } },
  build: {
    outDir: "../static/portal/components",
    emptyOutDir: true,
    lib: {
      entry: "src/controls.tsx",
      formats: ["es"],
      fileName: () => "credit-controls.js",
      cssFileName: "credit-controls",
    },
    minify: "esbuild",
    rollupOptions: {
      onwarn(warning, warn) {
        if (
          (warning.code === "MODULE_LEVEL_DIRECTIVE" &&
            warning.message.includes("use client")) ||
          warning.code === "SOURCEMAP_ERROR"
        )
          return;
        warn(warning);
      },
    },
  },
});

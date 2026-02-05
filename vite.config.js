import { resolve } from "path";
import { defineConfig } from "vite"

export default defineConfig({
    root: "src",
    publicDir: resolve(import.meta.dirname, "public"),
    build: {
        outDir: "../dist",
        assetsDir: "assets",
        sourcemap: false,
        minify: "esbuild"

    }

});

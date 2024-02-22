import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
    build: {
        reportCompressedSize: false,
        assetsInlineLimit: 0,
    },
    resolve: {
        alias: {
            "@src": fileURLToPath(new URL("./src", import.meta.url)),
            "@assets": fileURLToPath(new URL("./assets", import.meta.url)),
        },
    },
});

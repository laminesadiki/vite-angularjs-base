import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
    server: {
        port: 8000,
    },
    build: {
        reportCompressedSize: false,
        assetsInlineLimit: 0,
        rollupOptions: {
            output: {
                manualChunks: {
                    // chunk angularjs stuff together
                    ng1: ["angular", "angular-route"],
                },
            },
        },
    },
    // note: prevents minifying args in `function() {}`-based controllers, but
    // does not benefit the class-based component, which still needs `$inject`.
    // esbuild: {
    //     minifyIdentifiers: false,
    // },
    resolve: {
        alias: {
            "@src": fileURLToPath(new URL("./src", import.meta.url)),
            "@assets": fileURLToPath(new URL("./assets", import.meta.url)),
        },
    },
});

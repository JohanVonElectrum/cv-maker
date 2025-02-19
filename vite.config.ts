import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "/cv-maker",
    resolve: {
        alias: {
            "@": "/src",
            "@components": "/src/components",
            "@pages": "/src/pages",
            "@types": "/src/types",
            "@hooks": "/src/hooks",
        },
    },
});

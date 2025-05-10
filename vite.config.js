import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";
import checker from "vite-plugin-checker";

const __dirname = fileURLToPath(import.meta.url);

export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
    return {
        base: "/",
        plugins: [
            react({
                jsxImportSource: "@emotion/react",
                babel: {
                    plugins: ["@emotion/babel-plugin"],
                },
            }),
            checker({
                typescript: {
                    tsconfigPath: './tsconfig.json'
                },
            }),
            viteTsconfigPaths(),
        ],
        build: {
            outDir: "build",
            assetsDir: "assets",
            emptyOutDir: true,
        },
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "./src"),
            },
        },
        define: {
            "process.env": {
                NODE_ENV: "dev",
                PUBLIC_URL: "/",
                REACT_APP_API_PREFIX: "/api",
            },
        },
        server: {
            open: true,
            port: 3000,
            proxy: {
                "/api": {
                    target: "http://localhost:5000",
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/api/, ""),
                },
                "/felidae": {
                    target: "https://felidae.spookydoodle.com",
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/felidae/, ""),
                    secure: false,
                },
            },
        },
        preview: {
            open: true,
            port: 3000,
        },
    };
});

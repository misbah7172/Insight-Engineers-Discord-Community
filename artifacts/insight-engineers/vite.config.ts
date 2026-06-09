import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";
import { fileURLToPath } from "node:url";

const appRoot = path.dirname(fileURLToPath(import.meta.url));

const defaultEnv = {
  PORT: "5173",
  BASE_PATH: "/",
  VITE_SITE_NAME: "Insight Engineers",
  VITE_SITE_TAGLINE: "Subtle Thought But Meaningful.",
  VITE_SITE_TITLE: "Insight Engineers | Software & Data Science Community Discord",
  VITE_SITE_DESCRIPTION:
    "Join Insight Engineers, a community for software developers, data scientists, and AI engineers. Discuss coding, machine learning, and system design. Subtle Thought But Meaningful.",
  VITE_SITE_KEYWORDS:
    "software developer community, data science community, machine learning discord server, programming discussion group, AI engineering community, system design discussions, open source collaboration",
  VITE_SITE_URL: "https://insightengineers.app/",
  VITE_OG_IMAGE_URL: "https://insightengineers.app/opengraph.jpg",
  VITE_LOGO_URL: "https://insightengineers.app/favicon.svg",
  VITE_DISCORD_URL: "https://discord.gg/8596J4bQ",
  VITE_TERMS_URL: "#",
  VITE_PRIVACY_URL: "#",
};

function htmlEnvDefaults(env: Record<string, string | undefined>) {
  return {
    name: "html-env-defaults",
    enforce: "pre" as const,
    transformIndexHtml(html: string) {
      return html.replace(/%([A-Z0-9_]+)%/g, (match, key) => {
        return env[key] ?? match;
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = {
    ...defaultEnv,
    ...loadEnv(mode, appRoot, ""),
    ...process.env,
  };
  const rawPort = env.PORT;

  const port = Number(rawPort);

  if (Number.isNaN(port) || port <= 0) {
    throw new Error(`Invalid PORT value: "${rawPort}"`);
  }

  return {
    base: env.BASE_PATH,
    envDir: appRoot,
    plugins: [
      react(),
      tailwindcss(),
      htmlEnvDefaults(env),
    ],
    resolve: {
      alias: {
        "@": path.resolve(appRoot, "src"),
      },
      dedupe: ["react", "react-dom"],
    },
    root: appRoot,
    build: {
      outDir: path.resolve(appRoot, "dist"),
      emptyOutDir: true,
    },
    server: {
      port,
      strictPort: true,
      host: "0.0.0.0",
      allowedHosts: true,
      fs: {
        strict: true,
      },
    },
    preview: {
      port,
      host: "0.0.0.0",
      allowedHosts: true,
    },
  };
});

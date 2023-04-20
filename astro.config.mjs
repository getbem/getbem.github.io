import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";
import lightningcss from "vite-plugin-lightningcss";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://getbem.com",
  integrations: [tailwind(), solidJs(), image(), mdx(), sitemap()],
  vite: {
    plugins: [lightningcss({
      browserslist: "last 2 versions"
    })],
    ssr: {
      external: ["svgo"]
    }
  },
  markdown: {
    shikiConfig: {
      theme: 'dracula-soft',
    },
  },
});
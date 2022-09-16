import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";
import lightningcss from "vite-plugin-lightningcss";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://getbem.com",
  integrations: [tailwind(), solidJs(), image(), mdx(), partytown({
    // Adds dataLayer.push as a forwarding-event.
    config: {
      forward: ["dataLayer.push"]
    }
  }), sitemap()],
  vite: {
    plugins: [lightningcss({
      browserslist: "last 2 versions"
    })],
    ssr: {
      external: ["svgo"]
    }
  }
});
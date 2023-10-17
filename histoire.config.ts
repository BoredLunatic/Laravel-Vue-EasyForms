import { defineConfig } from "histoire";
import { HstVue } from "@histoire/plugin-vue";
import { resolve } from "path";
import { container } from "@mdit/plugin-container";
import { vuetifyDesignSystem } from "histoire-vuetify-design-system/design";

export default defineConfig({
  outDir: resolve(__dirname, "./docs"),
  setupFile: resolve(__dirname, "./src/histoire/histoire.setup.ts"),
  plugins: [
    HstVue(),
    vuetifyDesignSystem({
      configFile: resolve(__dirname, "./sandbox/src/plugins/vuetify/options"),
    }),
  ],
  theme: {
    title: "Documentation Easy Forms",
    colors: {
      primary: {
        50: "#1391dd",
      },
    },
  },
  tree: {
    groups: [
      {
        id: "top",
        title: "",
      },
      {
        id: "getting-started",
        title: "Getting Started",
      },
      {
        id: "forms",
        title: "Forms",
      },
    ],
  },
  storyIgnored: ["**/node_modules/**", "**/dist/**", "**/sandbox/**"],
  markdown: (md) => {
    md.use(container, {
      name: "stylesheet",
      openRender: (tokens: any, index: any) => {
        const stylesheet = tokens[index].info.split(" ")[1] ?? "style.css";
        return `<link href="/@fs${resolve(__dirname, stylesheet)}" rel="stylesheet" />`;
      },
      closeRender: () => {
        return `\n`;
      },
    });
    md.use(container, {
      name: "alert",
      openRender: (tokens: any, index: any) => {
        return `<div class="${tokens[index].info || "alert"}"><div class="contents">`;
      },
      closeRender: () => {
        return `</div></div>\n`;
      },
    });
    md.use(container, {
      name: "div",
      openRender: (tokens: any, index: any) => {
        return `<div class="${tokens[index].info || ""}">`;
      },
      closeRender: () => {
        return `</div>\n`;
      },
    });
    return md;
  },
});
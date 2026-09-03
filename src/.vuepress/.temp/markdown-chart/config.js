import { defineClientConfig } from "vuepress/client";
import ChartJS from "D:/bot-docs/node_modules/.pnpm/@vuepress+plugin-markdown-c_12f9a72adbebcf1ebb649e8d90a421fd/node_modules/@vuepress/plugin-markdown-chart/lib/client/components/ChartJS.js";
import FlowChart from "D:/bot-docs/node_modules/.pnpm/@vuepress+plugin-markdown-c_12f9a72adbebcf1ebb649e8d90a421fd/node_modules/@vuepress/plugin-markdown-chart/lib/client/components/FlowChart.js";
import Mermaid from "D:/bot-docs/node_modules/.pnpm/@vuepress+plugin-markdown-c_12f9a72adbebcf1ebb649e8d90a421fd/node_modules/@vuepress/plugin-markdown-chart/lib/client/components/Mermaid.js";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("ChartJS", ChartJS)
    app.component("FlowChart", FlowChart);
    app.component("Mermaid", Mermaid);
  },
});

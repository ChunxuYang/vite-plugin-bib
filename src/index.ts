const fileRegex = /\.bib$/;
import type { Plugin } from "vite";
import bibPaser from "bibtex-parse-js";

export default function viteBibPlugin(): Plugin {
  return {
    name: "vite-bib-plugin",
    transform(src, id) {
      if (fileRegex.test(id)) {
        const bib = bibPaser.toJSON(src);
        bib.forEach((entry) => {
          if (entry.entryTags.author) {
            entry.entryTags.author = entry.entryTags.author
              .split(" and ")
              .map((a) => a.trim());
          }
        });

        return "export default " + JSON.stringify(bib);
      }
    },
  };
}

const fileRegex = /\.bib$/;
import type { Plugin } from "vite";

import { BibtexParser } from "bibtex-js-parser";

export default (): Plugin => {
  return {
    name: "vite-bib-plugin",
    transform(src, id) {
      if (fileRegex.test(id)) {
        const bib = BibtexParser.parseToJSONString(src);
        return "export default " + bib;
      }
    },
  };
};

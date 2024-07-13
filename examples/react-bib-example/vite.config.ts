import { defineConfig } from "vite";
import bib from "vite-plugin-bib";

import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), bib()],
});

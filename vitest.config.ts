import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// Note to self: Vitest needs jsdom to test React components like a browser.
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
  },
});


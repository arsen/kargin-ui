import { readdirSync } from "fs";
import { defineConfig } from "tsup";

const srcFiles = readdirSync("src").filter(
  (f) => /\.(ts|tsx)$/.test(f) && !f.endsWith(".d.ts"),
);

export default defineConfig({
  entry: srcFiles.map((f) => `src/${f}`),
  format: ["esm"],
  dts: true,
  splitting: true,
  clean: true,
  outExtension: () => ({ js: ".mjs" }),
});

import { mkdirSync, writeFileSync } from "node:fs";

const review =
  "LGTM. Left one nit, mostly so git blame has proof I was here.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, review, "utf8");

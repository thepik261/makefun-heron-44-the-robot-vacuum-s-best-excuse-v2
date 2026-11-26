// The Robot Vacuum's Best Excuse — make.fun entry.
// Writes one funny one-line excuse from a robot vacuum to /output/entry.txt
// (or $OUTPUT_DIR/entry.txt when set, for local testing).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "My cliff sensor saw your dark rug, screamed 'stairs!', and honestly, I have never argued with a sensor mid-panic.";

const outDir = process.env.OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
console.log(line);

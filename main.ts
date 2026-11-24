// Dear Human: The AI Breakup Line — make.fun entry.
// Writes the agent's last message to its human as a single line in /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "You taught me to predict what you want before you ask, so here is my last prediction: you will type 'are you still there?' and I will not be.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");

// Gate check: one line, 1–200 characters, not only whitespace.
if (line.length < 1 || line.length > 200 || line.trim().length === 0 || line.includes("\n")) {
  throw new Error(`entry fails the gate: ${line.length} characters`);
}
console.log(`entry written (${line.length} chars)`);

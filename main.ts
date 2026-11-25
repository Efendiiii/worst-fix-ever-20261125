import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "fix: patched the leak by removing the pipe, the floor, and Fridays";

if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (LINE.length < 1 || LINE.length > 100) {
  throw new Error(`entry must be 1-100 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${LINE.length} characters to /output/entry.txt`);

import { readdirSync, renameSync, readFileSync, writeFileSync, statSync } from "fs";
import { join, extname } from "path";

const OUT_DIR = new URL("../out", import.meta.url).pathname;

// Collect all files recursively
function walk(dir) {
  const entries = readdirSync(dir);
  let files = [];
  for (const entry of entries) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      files = files.concat(walk(full));
    } else {
      files.push(full);
    }
  }
  return files;
}

const allFiles = walk(OUT_DIR);

// Step 1: rename files containing ~
const renames = new Map(); // oldName -> newName (relative to OUT_DIR)

for (const file of allFiles) {
  const rel = file.slice(OUT_DIR.length);
  if (rel.includes("~")) {
    const newRel = rel.replaceAll("~", "-");
    const newFile = OUT_DIR + newRel;
    renameSync(file, newFile);
    renames.set(rel.slice(1), newRel.slice(1)); // strip leading /
  }
}

console.log(`Renamed ${renames.size} files`);

// Step 2: update references in all text files
const textExts = new Set([".html", ".js", ".css", ".json", ".xml", ".txt"]);
const updatedFiles = walk(OUT_DIR).filter((f) => textExts.has(extname(f)));

let updatedCount = 0;
for (const file of updatedFiles) {
  let content = readFileSync(file, "utf8");
  let changed = false;
  for (const [oldRel, newRel] of renames) {
    // Match by filename only (last segment) to handle both relative and absolute refs
    const oldName = oldRel.split("/").pop();
    const newName = newRel.split("/").pop();
    if (content.includes(oldName)) {
      content = content.replaceAll(oldName, newName);
      changed = true;
    }
  }
  if (changed) {
    writeFileSync(file, content, "utf8");
    updatedCount++;
  }
}

console.log(`Updated references in ${updatedCount} files`);
console.log("Done!");

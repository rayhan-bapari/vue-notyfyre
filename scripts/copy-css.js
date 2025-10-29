const fs = require("node:fs/promises");
const path = require("node:path");

async function main() {
  const distDir = path.resolve(__dirname, "..", "dist");
  const source = path.join(distDir, "index.css");
  const target = path.join(distDir, "style.css");

  try {
    await fs.access(source);
  } catch {
    throw new Error(`Expected CSS file not found at ${source}`);
  }

  await fs.copyFile(source, target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

const execSync = require("child_process").execSync;
const path = require("path");
const fs = require("fs");

const buildDir = path.join(__dirname, "build");
const indexFile = path.join(buildDir, "index.html");

// If the build directory doesn't exist, exit the script
if (!fs.existsSync(buildDir)) {
  console.error("Build directory does not exist");
  process.exit(1);
}

// If the index.html file doesn't exist, exit the script
if (!fs.existsSync(indexFile)) {
  console.error("Index file does not exist");
  process.exit(1);
}

// Push the build directory to the gh-pages branch
execSync(`git add ${buildDir}`);
execSync(`git commit -m "Deploy to GitHub Pages"`);
execSync(`git subtree push --prefix ${buildDir} origin gh-pages`);

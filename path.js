const path = require("path");
const { fileURLToPath } = require("url");

console.log(path.sep);

const base = path.basename(fileURLToPath)
console.log(base);

const absolute = path.resolve(__dirname);
console.log(absolute);
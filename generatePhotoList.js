// generatePhotoList.js
const fs = require("fs");
const path = require("path");

const photoDir = path.join(__dirname, "photos");
const outputPath = path.join(__dirname, "photoList.js");

const validExtensions = [".jpg", ".jpeg", ".png", ".webp"]; // browsers support these

const files = fs.readdirSync(photoDir).filter(file =>
  validExtensions.includes(path.extname(file).toLowerCase())
);

const output = `// Auto-generated file — do not edit by hand
const photoList = ${JSON.stringify(files, null, 2)};
`;

fs.writeFileSync(outputPath, output);
console.log(`✅ photoList.js generated with ${files.length} photos.`);
const fs = require("node:fs");
function fileReader(filePath) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    return data;
  });
}

export default fileReader;

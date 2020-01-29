const fs = require("fs");

fs.readFile("16-5-1.txt", { encoding: "utf8" }, function(err, data) {
  console.log(data);
});

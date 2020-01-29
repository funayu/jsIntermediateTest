const fs = require("fs");

// fs.readFile("16-5-1.txt", { encoding: "utf8" }, function (err, data) {
//   console.log(data);
// });

// Promiseはthen, catchの2つのメソッドを持つ
const p = readFile("16-5-1.txt");
p.then(
  function(data) {
    // 処理
  },
  function(err) {
    // エラー処理
  }
);

p.catch(function(err) {
  // エラー処理
});

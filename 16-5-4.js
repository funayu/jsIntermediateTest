// Promiseオブジェクトを作成する
const p = new Promise(function(fulfill, reject) {
  setTimeout(fulfill, 2000);
});

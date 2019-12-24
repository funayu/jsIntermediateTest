// FileReaderのインスタンスを作る
const reader = new FileReader();
reader.onload = function(e) {
  console.log("読み込みが終わりました");
};

reader.readAsText(file);

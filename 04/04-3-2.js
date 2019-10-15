// iフラグ、アルファベットの小文字大文字を区別しない
console.log("ABCD".match(/abc/i));

// ｇフラグ、複数回マッチする
console.log("aaa1234bcd567efg8999h".replace(/\d+/g, "数字"));


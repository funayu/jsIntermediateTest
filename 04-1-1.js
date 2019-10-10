// 文字列の長さ
const str = "abcde";
console.log(str.length);

// 文字の位置検索
const idx = str.indexOf("b");
console.log(idx);

// 文字の位置検索（存在しない文字）
const idx2 = str.indexOf("f");
console.log(idx2);

// 文字の位置検索（複数文字）
const idx3 = str.indexOf("bcd");
console.log(idx3);

// 文字列から抜き出す
console.log(str.slice(1,4));
console.log(str.substring(1,4));
// 負の数の扱い方がsliceとsubstringの違い
console.log(str.slice(-3,5));
console.log(str.substring(-3,5));
// 2つめの引数は省略できる
console.log(str.slice(1));
console.log(str.substring(1));

// １文字だけ抜き出す
console.log(str.charAt(3));


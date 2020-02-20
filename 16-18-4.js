const str = "こんにちは。私は田中です。";

// 文字列が引数で始まるか判定
console.log(str.startsWith("こんにちは"));
console.log(str.startsWith("こんばんは"));

// 文字列が引数で終わるか判定
console.log(str.endsWith("です。"));
console.log(str.endsWith("ですぅ"));

// 6文字目から判定する
console.log(str.startsWith("私は", 6));

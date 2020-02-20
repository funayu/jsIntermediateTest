// 指定した文字のコードポイントを返す
console.log("🍟".codePointAt(0));

// 🍠のコードポイントを取得する、絵文字はサロゲートペア文字列なので🍠を指定したい場合は1ではなく2を指定
console.log("🍟🍠".codePointAt(2));

// コードポイントを渡すと対応する文字を返す
console.log(String.fromCodePoint(127839));

// 絵文字もイテレータとして扱える
console.log(Array.from("🍟🍠"));

// 指定した回数だけ文字列を繰り返した文字列を返す
console.log("foobar".repeat(5));

// 指定した文字が元の文字に含まれているかどうか
console.log("こんにちは。私は田中です。".includes("田中"));

// 文字列の長さが足りない時に指定した文字で埋める
console.log("1234".padStart(10, "0"));
console.log("12345".padStart(10, "-*"));
console.log("12345".padEnd(10, "-*"));

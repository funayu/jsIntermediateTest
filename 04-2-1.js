// 正規表現オブジェクト
new RegExp("ab+c");

// 正規表現リテラル
/ab+c/

// 文字列にマッチさせる
if(/bcd/.test("abcde")) {
  console.log("マッチしました");
} else {
  console.log("マッチしませんでした");
}


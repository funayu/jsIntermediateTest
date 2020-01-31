// 文字列を1文字ずつ配列にする
console.log(Array.from("foobar"));

// Array.fromは第二引数を関数を渡して処理できる
console.log(Array.from("foobar", char => char.toUpperCase()));

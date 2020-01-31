// ジェネレータ関数を定義
function* gen(x) {
  console.log(x);
  // yieldで関数から一旦抜ける
  yield;
  console.log(x * 2);
  yield;
  console.log(x * 3);
}

// ジェネレータオブジェクトの生成
const g = gen(10);

// ジェネレータ関数の実行
console.log("1回目");
g.next();
console.log("2回目");
g.next();
console.log("3回目");
g.next();

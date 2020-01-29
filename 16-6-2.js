// ジェネレータ関数を定義
function* gen(x) {
  yield x;
  yield x * 2;
  yield x * 3;
}

const g = gen(10);
console.log("1回目", g.next());
console.log("2回目", g.next());
console.log("3回目", g.next());

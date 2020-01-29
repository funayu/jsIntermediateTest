// ジェネレータ関数を定義
function* gen(x) {
  console.log("x:", x);
  const y = yield;
  console.log("y:", y);
  const z = yield;
  console.log("z:", z);
}

const g = gen(10);
g.next();
g.next(100);
g.next(1000);

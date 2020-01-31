function* gen1() {
  yield* [1, 2, 3];
  return "foo";
}

function* gen2() {
  const result = yield* gen1();
  console.log("resultは", result);
}

const g = gen2();
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());

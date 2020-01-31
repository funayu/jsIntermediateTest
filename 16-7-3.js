function* gen() {
  try {
    yield 1;
    yield 10;
    yield 100;
  } catch (e) {
    yield -42;
  }
}

const g = gen();
console.log(g.next());
console.log(g.throw(new Error("ヘイ")));

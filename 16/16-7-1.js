function* gen() {
  yield 1;
  yield 10;
  yield 100;
}

const g = gen();
console.log(g.next());
console.log(g.return("foo"));
console.log(g.next());

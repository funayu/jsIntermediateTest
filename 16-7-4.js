function* gen() {
  console.log(yield* [1, 2, 3]);
}

const g = gen();
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());

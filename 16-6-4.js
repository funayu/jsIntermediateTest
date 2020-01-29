function* sum() {
  let acc = 0;
  while (true) {
    const x = yield acc;
    acc += x;
  }
}

const g = sum();
g.next();

console.log(g.next(1));
console.log(g.next(2));
console.log(g.next(3));
console.log(g.next(4));

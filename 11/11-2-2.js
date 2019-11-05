function sum(x, y, z) {
  return x + y + z;
}

const foo = sum.bind(null, 10);
console.log(foo(20, 30));
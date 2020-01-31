class Foo {
  constructor(x, y) {
    return [x, y];
  }
}

const arr = new Foo(1, 2);

console.log(arr);
console.log(arr instanceof Foo);

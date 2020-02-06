class Foo {
  constructor(x, y) {
    return [x, y];
  }
}

class Bar extends Foo {
  constructor(x, y, z) {
    super(x, y);
    this.push(z);
  }
}

console.log(new Bar(1, 2, 3));

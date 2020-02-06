class Foo {
  static prop() {
    return "hi";
  }
}

class Bar extends Foo {}

console.log(Bar.prop());

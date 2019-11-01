const obj = {
  foo: "bar",
  baz: 3,
};

const desc = Object.getOwnPropertyDescriptor(obj, "foo");

console.log(desc);

console.log(Object.getOwnPropertyDescriptor(Object.prototype, "toString"));

const obj = {
  foo: 123
};

// obj.fooと同じ意味
console.log(Reflect.get(obj, "foo", obj));

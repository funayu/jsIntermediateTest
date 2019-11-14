const obj = {
  foo: "Hi",
};

Object.seal(obj);

obj.foo = 'foo';
obj.bar = 3;
console.log(obj);
const obj = {
  foo: "Hi",
};

Object.preventExtensions(obj);

obj.bar = 3;

console.log(obj.bar);
console.log('bar' in obj);
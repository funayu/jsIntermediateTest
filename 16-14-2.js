const target = {};
const obj = new Proxy(target, {
  get(target, name, receiver) {
    return name;
  }
});

console.log(obj.foo);

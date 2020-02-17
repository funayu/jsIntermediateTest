const target = {};
const obj = new Proxy(target, {
  get(target, name, receiver) {
    return name;
  }
});

console.log(obj.foo);
console.log(obj["あいうえお"]);

obj.name = "Mary Sue";
console.log(obj.name);
console.log(target.name);

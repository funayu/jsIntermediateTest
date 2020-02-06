const obj = new Proxy(
  {},
  {
    set(target, name, value, receiver) {
      if ("number" === typeof value) {
        target[name] = value;
      } else {
        throw new Error("は？");
      }
    }
  }
);

obj.foo = 3;
console.log(obj.foo);
obj.bar = "hello";

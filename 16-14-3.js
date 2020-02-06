const target = {
  apple: "りんご",
  orange: "みかん"
};

const obj = new Proxy(target, {
  get(target, name, receiver) {
    if (target.hasOwnProperty(name)) {
      return target[name];
    } else {
      return "hello";
    }
  }
});

console.log(obj.apple);
console.log(obj.peach);

obj.peach = "もも";
console.log(obj.peach);

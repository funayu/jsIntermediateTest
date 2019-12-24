const obj = {};
const s = Symbol();
obj[s] = "foo";
console.log(obj[String(s)]);

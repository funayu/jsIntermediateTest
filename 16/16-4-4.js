const obj = {};
const s = Symbol();

obj[s] = "foo";
console.log(Object.getOwnPropertySymbols(obj)[0] === s);

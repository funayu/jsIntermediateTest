const obj = {};
obj["foo"] = "hoge";

const s = Symbol();
obj[s] = "piyo";

console.log(obj.foo, obj[s]);

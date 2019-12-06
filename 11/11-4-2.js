const obj = {
  foo: "bar",
  baz: 3
};

const names = Object.keys(obj);

console.log(names);

names.forEach((name) => {
  console.log(obj[name]);
});
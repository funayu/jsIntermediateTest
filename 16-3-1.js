const [a, b, c] = ["foo", "bar"];
console.log(a);
console.log(b);
console.log(c);

const { d, e } = {
  d: "foo",
  e: "bar"
};
console.log(d);
console.log(e);

const { f: fooF, g } = {
  f: "foo!",
  g: "bar!"
};
// console.log(f);
console.log(fooF);
console.log(g);

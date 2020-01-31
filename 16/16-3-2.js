const [a, b, c, d, e] = "foobar";

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

const [f, , g] = [1, 2, 3];

console.log(f);
console.log(g);

const [h, i, ...j] = [1, 2, 3, 4, 5];

console.log(j);

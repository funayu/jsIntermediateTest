console.log(typeof Symbol());

const s = Symbol();
const obj = {
  [s]: "foo"
};

console.log(obj[s]);

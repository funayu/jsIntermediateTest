const obj = {
  "foo bar"() {
    return 0;
  },
  1e5() {
    return 1e5;
  },
  [Symbol.iterator]() {
    throw new Error("ヘイ");
  }
};

console.log(obj);

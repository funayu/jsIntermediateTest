const obj = {
  [Symbol.toPrimitive](hint) {
    if (hint === "string") {
      return "三百";
    } else {
      return 300;
    }
  }
};

console.log(String(obj));
console.log(Number(obj));
console.log(obj * 3);

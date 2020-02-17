const m = new Map([
  [Boolean, "Boolean"],
  [Number, "Number"],
  [String, "String"]
]);

m.forEach((value, key) => {
  console.log(`${value}(3):`, key(3));
});

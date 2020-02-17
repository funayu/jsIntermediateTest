const m = new Map([
  [Boolean, "Boolean"],
  [Number, "Number"],
  [String, "String"]
]);

// forEachよりこちらの方が今どき、for文なのでcontinueやbreakが使える
for (const [key, value] of m.entries()) {
  console.log(`${value}(3):`, key(3));
}

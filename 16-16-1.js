const arr = ["foo", "bar", "baz"];

// 配列をentriesメソッドでイテレータに変換することで、for of文で使うことができる
for (const [idx, value] of arr.entries()) {
  console.log(`${idx}:${value}`);
}

const s = new Set(["foo", "bar", 3]);

console.log(s);
console.log(s.has("foo"));

// valuesメソッドはSetに入っている値を取り出すイテレータを返す
for (const value of s.values()) {
  console.log(value);
}

for (const value of s.entries()) {
  console.log(value);
}

for (const value of s) {
  console.log(value);
}

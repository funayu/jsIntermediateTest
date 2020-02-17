// emptyを含む配列
const arr = [0, 1, , 3, , 6];

// 配列の各要素を2倍にした配列
const arr2 = arr.map(x => x * 2);
for (const value of arr2.entries()) {
  console.log(value);
}

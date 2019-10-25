const array = [5, 2, 10, 365, 8];
array.sort();
console.log(array);

// 数値の比較の場合は比較用関数を書く
const array2 = [5, 2, 10, 365, 8];
array2.sort((a, b) => a - b);
console.log(array2);

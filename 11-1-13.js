const array = [3, 8, 2, 10, 5, 9, 8];

let sum = 0;

// forEachを使う
array.forEach((value) => {
  sum += value;
});

console.log(sum);


// reduceを使う
// 二つ目の引数0はaccumulatorの初期値
const sum2 = array.reduce((accumulator, value) => {
  console.log(`accumulator:${accumulator} value:${value}`);
  return accumulator + value;
}, 0);

console.log(sum2);
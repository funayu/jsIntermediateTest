const arr = [3, 1, 3, 1, 5];

// arrのイテレータを作る
const iterator = arr.entries();

// arrを変更
arr[0] = 0;

// 手動でイテレータを回す
let result;
while (true) {
  result = iterator.next();
  if (result.done) {
    break;
  }
  console.log(result.value);
}

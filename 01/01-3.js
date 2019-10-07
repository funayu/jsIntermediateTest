// 正しく配列をコピーするための関数
function copyArray(arr){
  const newarr = [];
  for(let i=0; i<arr.length; i++){
    newarr[i] = arr[i];
  }
  return newarr;
}

const a = [0,1,2,3,4];
console.log("a:" + a);

// これはダメな例
// const b = a;

// 配列aを配列bにコピー
const b = copyArray(a);
console.log("b:" + b);

a[5] = 5;
console.log("b:" + b);

// 配列のコピー：ES2015ではこの書き方もできる
var c = [...a];
console.log("c:" + c);






const array = ['麻生太郎', '鳩山由紀夫', '菅直人'];

// 配列の要素数だけ繰り返す
const newArray = array.map((value) => value + "氏").join("→");

console.log(newArray);
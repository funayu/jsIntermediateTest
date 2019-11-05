const array = ['麻生', '鳩山', '菅'];
// 2つめのインデックスから1つ要素を取り除いてその位置に要素を追加する
array.splice(1, 1, "小沢");
console.log(array);

// 配列を逆順にする
array.reverse();
console.log(array);
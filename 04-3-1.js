// match
console.log("aabcbcacbuccb".match(/a.{5}c/));
// カッコでグループ化した部分がキャプチャされて配列の1番目に入る
const str = "aabcbcacbuccb";
const result = str.match(/a(.{5})c/);
console.log(result[0]);
console.log(result[1]);

// タグ名imgだけを抜き出す
const str2 = '<img src ="aaa.gif">'
console.log(str2);
const result2 = str2.match(/<(\S+)\s+.+>/);
console.log(result2[1]);
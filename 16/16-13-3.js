const arr = ["John Smith", "Taro Tanaka", "Gonbe Nanashiro"];

// arr.entriesでMapに変換
const m = new Map(arr.entries());

console.log(m.get(0));

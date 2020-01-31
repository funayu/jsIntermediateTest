// WeakMapのインスタンスを生成する
const wm = new WeakMap();

// キーにオブジェクトを使用する
const key1 = {};

wm.set(key1, 100);
console.log(wm.get(key1));

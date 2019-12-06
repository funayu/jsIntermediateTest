// 敵を作る
function Teki() {
  console.log("新しい敵オブジェクトができました");
}

// ドラゴンを作る
function Dragon() {
  Teki.apply(this, arguments);
}
// Dragon.prototype = new Teki;
Dragon.prototype = Object.create(Teki.prototype);

const zako = new Teki();
const boss = new Dragon();

console.log(Dragon.prototype.isPrototypeOf(boss));
console.log(Teki.prototype.isPrototypeOf(boss));
// 敵を作る
function Teki(n) {
  this.name = n;
}

// 現れる
Teki.prototype.appear = function() {
  console.log(`${this.name}が現れた！`);
};

// 攻撃
Teki.prototype.attack = function() {
  console.log(`${this.name}のこうげき！ダメージをうけた！`);
};

const zako = new Teki("ザコ");

console.log(Object.keys(zako));
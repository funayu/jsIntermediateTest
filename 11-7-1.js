function Teki(n) {
  this.name = n;
}

// 現れる
Teki.prototype.appear = function () {
  console.log(this.name + "が現れた");
};

const zako1 = new Teki("ザコ");
zako1.appear();

console.log(zako1.name);
console.log(zako1.hasOwnProperty("name"));
console.log(zako1.hasOwnProperty("appear"));
console.log(Object.getPrototypeOf(zako1) === Teki.prototype);
console.log(Teki.prototype.isPrototypeOf(zako1));
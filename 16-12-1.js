class Teki {
  constructor(name, hp) {
    this.name = name;
    this.hp = hp;
  }
  attack() {
    console.log(`${this.name}のこうげき！`);
  }
}

class Dragon extends Teki {
  hello() {
    console.log(`${this.name}のHPは${this.hp}です。`);
  }
}

const boss = new Dragon("どらごん", 3000);

boss.attack();
boss.hello();

console.log(Dragon.prototype.hasOwnProperty("hello"));
console.log(Dragon.prototype.hasOwnProperty("attack"));
console.log(Object.getPrototypeOf(Dragon.prototype) === Teki.prototype);

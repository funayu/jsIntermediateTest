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
  constructor(name, hp) {
    super(name, hp);
    console.log("がおーーーーー");
  }

  hello() {
    console.log(`${this.name}のHPは${this.hp}です。`);
  }
}

const boss = new Dragon("どらごん", 3000);

boss.attack();
boss.hello();

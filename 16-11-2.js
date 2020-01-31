class Teki {
  constructor(name) {
    this.name = name;
  }

  attack() {
    console.log(`${this.name}の攻撃！`);
  }

  static makeZako() {
    return new Teki("かなりザコ");
  }
}

const zako = new Teki("ザコ");
zako.attack();

const zako2 = Teki.makeZako();
zako2.attack();

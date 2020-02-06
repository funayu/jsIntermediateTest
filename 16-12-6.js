class Teki {
  constructor() {
    console.log("コンストラクタは", new.target.name);
  }
}

class Dragon extends Teki {
  constructor() {
    super();
  }
}

const zako = new Teki();
const boss = new Dragon();

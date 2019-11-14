function Teki() {

}

function Dragon() {
  Teki.apply(this, arguments);
}

Dragon.prototype = Object.create(Teki.prototype, {
  constructor: {
    value: Dragon
  }
});

const boss = new Dragon();
console.log(boss.constructor);
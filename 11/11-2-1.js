function showThis() {
  console.log(this);
}

const foo = showThis.bind("菅直人");

foo();
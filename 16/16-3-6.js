function quux({ a, b = 3, c } = {}) {
  console.log(a, b, c);
}

quux({ a: 5 });

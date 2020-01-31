// startからendまでの整数を順番に発生させるジェネレータ関数
function* ran(start, end) {
  for (let currentValue = start; currentValue <= end; currentValue++) {
    yield currentValue;
  }
}

for (const i of ran(5, 10)) {
  console.log(i);
}

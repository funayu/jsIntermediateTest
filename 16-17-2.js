console.log(-3 / Infinity);

const arr = [2, 3, 5, 0, 1];

// array.includesだと0と-0は同じと扱われる
console.log(arr.includes(-0));

console.log(Object.is(0, -0));

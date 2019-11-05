const array = [3, 8, 2, 10, 5, 9, 8];

const newArray = array.filter((value) => value <= 5);

console.log(newArray);

console.log(array.some((value) => value <= 5));
console.log(array.every((value) => value <= 5));
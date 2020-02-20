const obj1 = {
  name: "John Smith",
  age: 42
};

const obj2 = {
  age: 28,
  job: "Time-traveller"
};

// obj2の内容をobj1に書き込む
Object.assign(obj1, obj2);
console.log(obj1);

var obj1 = {
  name: "John Smith",
  age: 42
};

var obj2 = {
  age: 28,
  job: "Time-traveller"
};

const obj3 = Object.assign({}, obj1, obj2);
console.log(obj3);

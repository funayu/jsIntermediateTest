const obj1 = {
  name: "John Smith",
  age: 42
};

// オブジェクトをコピーして新しいオブジェクトを作る
const obj2 = Object.assign({}, obj1);

console.log(obj1 === obj2);

console.log(obj1, obj2);

obj1.name = "gemoi-chan";

console.log(obj1, obj2);

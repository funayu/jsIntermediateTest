const obj = {
  prop: "Hi",
};

Object.freeze(obj);

obj.prop = '吉野家';

console.log(obj.prop);

console.log(Object.isFrozen(obj));
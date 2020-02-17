const obj1 = {
  func: function(foo, bar) {
    return foo + bar;
  }
};

const obj2 = {
  func(foo, bar) {
    return foo + bar;
  }
};

console.log(obj2.func("foo", "bar"));

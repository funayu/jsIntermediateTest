const p1 = Promise.resolve(4);
const p2 = p1.then(function(result) {
  console.log("p1: ", result);
  return result * 2;
});

p2.then(function(result) {
  console.log("p2: ", result);
});

const p1 = Promise.resolve(4);
const p2 = p1
  .then(function(result) {
    return result * 2;
  })
  .then(function(result) {
    console.log("p2: ", result);
  });

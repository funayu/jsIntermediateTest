const p1 = Promise.reject("err");
const p2 = p1.then(function(result) {
  return result * 2;
});
p2.then(
  function(result) {
    console.log("p2: ", result);
  },
  function(err) {
    console.log("p2 fails: ", err);
  }
);

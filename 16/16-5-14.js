const p1 = Promise.resolve(5);
const p2 = p1.catch(function(err) {
  // errを無視して値を返す
  return 10;
});
p2.then(
  function(result) {
    console.log("p2: ", result);
  },
  function(err) {
    console.log("p2 fails: ", err);
  }
);

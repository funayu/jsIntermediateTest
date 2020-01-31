const p1 = Promise.reject("err");
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

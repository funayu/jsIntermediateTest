const p1 = makeSomePromise();
const p2 = p1.then(function(result) {
  console.log(result);
});

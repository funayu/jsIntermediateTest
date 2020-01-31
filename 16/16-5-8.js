function doublePromise(value) {
  return new Promise(function(fulfill, resolve) {
    setTimeout(function() {
      fulfill(value * 2);
    }, 2000);
  });
}

Promise.resolve(4)
  .then(function(result) {
    return doublePromise(result);
  })
  .then(function(result) {
    console.log("p2: ", result);
  });

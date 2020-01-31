function doublePromise(value) {
  return new Promise(function(fulfill, resolve) {
    setTimeout(function() {
      fulfill(value * 2);
    }, 2000);
  });
}

Promise.resolve(4)
  .then(doublePromise)
  .then(function(result) {
    console.log("p2: ", result);
  });

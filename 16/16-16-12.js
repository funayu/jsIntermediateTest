class SuperArray extends Array {
  constructor(...args) {
    super(...args);
  }

  double() {
    const len = this.length;
    this.length = len * 2;
    this.copyWithin(len, 0, len);
  }
}

const arr = new SuperArray(1, 2, 3);
console.log(arr);
console.log(arr[1]);

arr.push(4);
console.log(arr);

arr.double();
console.log(arr);

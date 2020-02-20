// 整数か
console.log(Number.isInteger(3));
console.log(Number.isInteger(2.5));
console.log(Number.isInteger(2 ** 128));

// 整数の値が大きくなりすぎると精度が落ちる
console.log(2 ** 53 === 2 ** 53 + 1);
console.log(2 ** 53 === 2 ** 53 + 2);
// 安全な整数か確認
console.log(Number.isSafeInteger(2));
console.log(Number.isSafeInteger(2 ** 53));

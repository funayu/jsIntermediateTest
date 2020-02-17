// ===での比較は、NaN同士を比較するとfalseになる
console.log(Number.NaN === Number.NaN);

// Object.isでの比較だとtrueになる、こちらの方が厳密
console.log(Object.is(Number.NaN, Number.NaN));

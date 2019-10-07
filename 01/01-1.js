// オブジェクトの生成
const obj = new Object;

// オブジェクトのプロパティを作成し値を代入
obj.aaa = "test";
obj.b = 123;

// プロパティの値をログ出力
console.log(obj.aaa);
console.log(obj.b);

// プロパティの値を書き換え
obj.aaa ="testtest";

// 書き換えたプロパティの値を確認
console.log(obj.aaa);

// プロパティ名を入れる変数
const objName = "aaa";
// プロパティ名を入れた変数を使ってログ出力
console.log(obj[objName]); 
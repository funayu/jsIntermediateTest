// グループ化、個別に置き換えできる
console.log("aaa1234bcd567efg8999h".replace(/(\d+)/g, "数$1字"));
console.log("aaa1234bcd567efg8999h".replace(/\d+/g, "数$&字"));
// replaceの第二引数に関数を与えて置き換える
console.log("aaa1234bcd567efg8999h".replace(/\d+/g, function(str){
  return "数" + str +"字";
}));

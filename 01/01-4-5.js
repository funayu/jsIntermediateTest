const a = {
  abc: function(){ console.log("abc");},
  aaa: function(){ console.log("aaa");}
};

a.abc();
a.aaa();

const b = {
  bbb(){ console.log("bbb");}
};

b.bbb();
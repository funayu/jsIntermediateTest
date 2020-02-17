function MyDiv(name) {
  this.div = document.createElement("Div");
  this.name = name;
  this.div.appendChild(
    document.createTextNode("このdiv要素は" + name + "です")
  );
  document.body.appendChild(this.div);

  this.div.addEventListner(
    "click",
    function(e) {
      console.log(this.name);
    }.bind(this),
    false
  );
}

const div1 = new MyDiv("div1");

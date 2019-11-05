var array = ['麻生太郎', '鳩山由紀夫', '菅直人'];
const ul = document.createElement("ul");

// 配列の要素分繰り返す
array.forEach((value) => {
  const li = document.createElement("li");
  li.textContent = value;
  ul.appendChild(li);
});

document.body.appendChild(ul);
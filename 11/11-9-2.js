let bar;

function makeFoo() {
  foo = 3;
}

function makeBarStrict() {
  'use strict';
  bar = 5;
}

makeFoo();
console.log(foo);

makeBarStrict();
console.log(bar);
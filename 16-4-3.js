const myHiddenSymbol = Symbol();

function saveValueInObject(obj, value) {
  obj[myHiddenSymbol] = value;
}

function getValueFromObject(obj) {
  return obj[myHiddenSymbol];
}

function tag(parts, num1, num2) {
  return parts[0] + num2 + parts[1] + num1 + parts[2];
}

console.log(tag`foo ${123} bar ${456} baz`);

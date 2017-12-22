let a = 5;
const b = 5;
const f = a;
a = 10;
console.log(f);

const c = { age: 10 };
const e = c;

c.age = 11;
console.log(e === c);

const d = { age: 10 };
// console.log(c === d);

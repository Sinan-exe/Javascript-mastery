// var x = 10;

// console.log(globalThis.x); // 10
// // console.log(globalThis === window); // true

// let a = [];
// let b = a;
// b[0] = 2;
// console.log(a);

// console.log(a === b);

let a = {};
let b = a;

b["name"] = "sinan";

console.log(a);
console.log(b);

console.log(a === b);

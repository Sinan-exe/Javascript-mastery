// const a = Infinity;

// console.log(a)

// console.log(Number.MAX_VALUE * 2)

// console.log(0/0)

// console.log(Number.MIN_VALUE)
// const x = 0

// if(Number.isNaN(x)){
//     console.log("x is NaN")
// } else {
//     console.log("x is not NaN")
// }

// Generate a random integer between –10 and +10 (inclusive)

// const value = Math.floor(Math.random() * 21) - 10;
// console.log(value);

// Clamp a number between 0 and 100

// function clamp(x) {
//   return Math.min(100, Math.max(0, x));
// }

// console.log(clamp(-150));

// Round a number to the nearest multiple of 5

// function roundTo(x) {
//   return Math.round(x);
// }

// console.log(roundTo(16));

// const dice = Math.ceil(Math.random() * 6);

// console.log(dice);

let timeStamp = Date.now();
let now = new Date();
let ms = now.getTime();
let iso = now.toISOString();

console.log(timeStamp);
console.log(now);
console.log(ms);
console.log(iso);

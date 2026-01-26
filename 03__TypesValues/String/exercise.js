// 1) let s = "JavaScript";

// console.log(s.charAt(0));
// console.log(s.charAt(s.length - 1));

//  2) let s = "Frontend";

// console.log(s.charCodeAt(0));
// console.log(s.charCodeAt(s.length - 1));

//  3) let email = "user@gmail.com";
// console.log(email.slice(5, 10));

// 4) let input = "   hello world   ";
// console.log(input.trim());

// 5) let name = "sinan";
// let name_capital = name.charAt(0).toUpperCase();
// let name_sl = name.slice(1);
// console.log(name_capital.concat(name_sl));

// 6) let username = "john_doe";

// if (!(username.startsWith("[0-9]") || username.includes(" "))) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// 7) let file = "resume.final.version.pdf";

// console.log(file.endsWith("pdf"));

// 8) let phone = "9876543210";
// let sol = phone.slice(-4).padStart(10, "*");

// console.log(sol);

// 9) let sentence = "hello world hello";
// console.log(sentence.indexOf("hello"));
// console.log(sentence.lastIndexOf("hello"));

// 10) let url = "http://example.com";
// if (!url.startsWith("https")) {
//   console.log(false);
// } else {
//   console.log(true);
// }

// 11) let sentence = "JS is easy and JS is powerful";
// let p1 = sentence.slice(0, 2).replace("JS", "JavaScript");
// let p2 = sentence.slice(2);
// console.log(p1.concat(p2));

// 12) let text = "Learning JavaScript Is FUN";
// let sol = text.toLowerCase().includes("javascript");
// console.log(sol);

// 13) let sentence = "I love JavaScript";
// let sol = sentence.split(" ")[1];
// console.log(sol);

// 14) let input = "   FRONTEND developer   ";
// let sol = input.trim().toLowerCase();
// let p1 = sol.split(" ")[0];
// let p1_sp = p1.slice(0, 1).toUpperCase();
// let p1_an = p1.slice(1);
// let p1_sol = p1_sp.concat(p1_an);

// let p2 = sol.split(" ")[1];
// let p2_sp = p2.slice(0, 1).toUpperCase();
// let p2_an = p2.slice(1);
// let p2_sol = p2_sp.concat(p2_an);

// console.log(p1_sol + " " + p2_sol);

let card = "1234567812345678";

let p1 = card.slice(0, 4);
let p2 = card.slice(4, 8);
let p3 = card.slice(8, 12);
let p4 = card.slice(12, 16);

console.log(p1 + "-" + p2 + "-" + p3 + "-" + p4);

const news = "two\nlines";

const new2 =
  "one\
 long\
 day";

const new3 = "You're right i don't do such thing";

const new4 = "Hello \t world";

const new5 = "Hello \world";

// console.log(new5);

//1. Portions of the String

let s = "Hello World";

// console.log(s.substring(1, 4));
// console.log(s.slice(0, 5));
// console.log(s.split(" "));

let str = "Javascript";

// console.log(str.substring(0, 4));
// console.log(str.slice(4));

let email = "user@gmail.com";

// console.log(email.slice(5, 10));

let sentence = "I love JavaScript programming";
let word = sentence.split(" ")[2];

// console.log(word);

let file = "resume.final.version.pdf";

// console.log(file.slice(-3));

let url = "https://www.example.com/home";
let sol = url.split("/")[2].slice(4);
// console.log(sol);

let name = "Mr. John Doe";
// console.log(name.slice(4));

let data = "apple,banana,grape,mango";
let fruit = data.split(",")[2];
// console.log(fruit);

let str2 = "frontend@developer@javascript";
let sol2 = str2.split("@")[1];
// console.log(sol2);

let msg = "Learn-JavaScript-In-30-Days";
// i did not get this

//explicit type casting in js
let str = "123";
let num = Number(str); // num is now a number with a value of 123
console.log(typeof str);
console.log("type after conversion");
console.log(typeof num);
//implicit type casting
let num2 = 5;
let str2 = "10";
let result = num2 + str2; // result is now a string with a value of "510"
console.log(typeof num2);
console.log(typeof str2);
console.log("type after conversion");
console.log(typeof result);

//type conversion
let str1 = "123";
let num1 = Number(str);
//coercion
let num4 = 5;
let str4 = "10";
let result4 = num4 + str4; // result is now a string with a value of "510"

let y = "5";      // y is a string
let x = + y;      // x is a number
console.log(typeof y);
console.log(typeof x);

let y1 = "John";   // y is a string
let x1 = + y;      // x is a number (NaN)
console.log(typeof y1);
console.log(typeof x1);



//variable declarations in javascript
/*
rules for creating variable in javascript
All JavaScript variables must be identified with unique names.

These unique names are called identifiers.

Identifiers can be short names (like x and y) or more descriptive names (age, sum, totalVolume).

The general rules for constructing names for variables (unique identifiers) are:

Names can contain letters, digits, underscores, and dollar signs.
Names must begin with a letter.
Names can also begin with $ and _ (but we will not use it in this tutorial).
Names are case sensitive (y and Y are different variables).
Reserved words (like JavaScript keywords) cannot be used as names.

JavaScript identifiers are case-sensitive.
*/
//using nothing to create variable in javascript
a=1
b=2
console.log(a)
console.log(b)
//using let to create variables
let x=20
let y=50
console.log(x+y)
//using const to crete variables
const x1=20
const y1=80
console.log(x1+y1)
//using var to create variables
var x2=20
var y2=80
console.log(x2+y2)
/*
Always declare JavaScript variables with var,let, orconst.

The var keyword is used in all JavaScript code from 1995 to 2015.

The let and const keywords were added to JavaScript in 2015.

If you want your code to run in older browsers, you must use var.
*/
/*
If you want a general rule: always declare variables with const.

If you think the value of the variable can change, use let.
*/
const price1 = 5;
const price2 = 6;
let total = price1 + price2;
console.log(total)
//one statement many variable
let person = "John Doe", carName = "Volvo", price = 200;
console.log(person)
// let person = "John Doe",
// carName = "Volvo",
// price = 200;

//variables are often declared without a value. The value can be something that has to be calculated, or something that will be provided later, like user input.

//A variable declared without a value will have the value undefined.
let e;
//gives the output undefined
console.log(e)
//If you re-declare a JavaScript variable declared with var, it will not lose its value.

//The variable carName will still have the value "Volvo" after the execution of these statements:
var carName1 = "Volvo";
var carName1;
//You cannot re-declare a variable declared with let or const.
//JavaScript treats a dollar sign as a letter, identifiers containing $ are valid variable names:

let $ = "Hello World";
let $$$ = 2;
let $myMoney = 5;
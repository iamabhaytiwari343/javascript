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

/*
use of let keyword

The let keyword was introduced in ES6 (2015).

Variables defined with let can not be redeclared.

Variables defined with let must be declared before use.

Variables defined with let have block scope.
*/
let x=20
//again let x=30 is not possible
console.log(x)
//with var it is possible
var x1=30
console.log(x1)
// redeclare
var x2=30
console.log(x2)


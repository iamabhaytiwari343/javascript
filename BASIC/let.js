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
var x1=50
console.log(x1)
//block scope undertsnding
{
    let y=3
}
//y can not be used here
//with var we can use it outside the block
{
    var y2=3
}
console.log(y2)
//redeclaring with var imposes problems
var z=10
console.log(z)
{
    var z=20
    console.log(z)
}
console.log("outside the block value changes")
console.log(z)
//redeclaring with let corrects this 
let k=10
console.log(k)
{
    let k=20
    console.log("new value inside block")
    console.log(k)
}
console.log("outside the block value does not changes")
console.log(k)


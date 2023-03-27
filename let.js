/*
use of let keyword

The let keyword was introduced in ES6 (2015).

Variables defined with let can not be redeclared.

Variables defined with let must be declared before use.

Variables defined with let have block scope.
*/
let x = "John Doe";
//not possible with let
//let x = 0;
{
    let y = 2;
  }
  // x can NOT be used here
  console.log(y)

  //Redeclaring a variable using the var keyword can impose problems.

//Redeclaring a variable inside a block will also redeclare the variable outside the block:
var x = 10;
// Here x is 10

{
var x = 2;
// Here x is 2
}

// Here x is 2
/* Redeclaring a variable using the let keyword can solve this problem.

Redeclaring a variable inside a block will not redeclare the variable outside the block:
 */
let x = 10;
// Here x is 10

{
let x = 2;
// Here x is 2
}

// Here x is 10
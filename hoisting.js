//In JavaScript, hoisting refers to the behavior of moving variable and function declarations to the top of their respective scopes (either the global scope or function scope) before any code is executed.
console.log(x); // undefined
var x = 5;
//Even though the console.log(x) statement appears before the var x = 5 statement, the variable declaration is hoisted to the top of the scope, so the output of console.log(x) is undefined instead of resulting in a ReferenceError.
myFunction(); // "Hello, world!"
function myFunction() {
  console.log("Hello, world!");
}
//However, it's important to note that only the declarations themselves are hoisted, not the initializations or assignments. So if you try to access the value of a variable before it has been assigned, you will still get undefined.
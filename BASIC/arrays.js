// declaring arrays 
const cars=["BMw","mercedes","maruti"];
const numbers=[1,2,3,4,5,6,7];
// acessing array elements
console.log(cars[0],numbers[4]);
//arrays can have multiple datatypes in js
const numcars=["maruti","wagonr",45000,"suzuki"];
// arrays in javascript are zero indexed
// we can change the array element in an array
numcars[0]=2500;
console.log(numcars);
console.log(typeof numcars);
// find out the length of numcars
console.log("hello numcars i have length: ",numcars.length);
const dynamic=[25,36,1,5,89,74,3,22,8,65]
// sorting a array using library function
dynamic.sort();
console.log(dynamic);
//looping through array or array traversal
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;
for (let i = 0; i < fLen; i++) {
  console.log(fruits[i]);
}
// lopping using for each
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
let text = "<ul>";
fruits2.forEach(myFunction);
text += "</ul>";
function myFunction(value) {
  text += "<li>" + value + "</li>";
  console.log(text);
} 
//adding an element to an array using push
const fruits3 = ["Banana", "Orange", "Apple"];
fruits3.push("Lemon");  // Adds a new element (Lemon) to fruits 
// adding elements using fruits length property
const fruits4 = ["Banana", "Orange", "Apple"];
fruits[fruits.length] = "Lemon";  // Adds "Lemon" to fruits 
//Adding elements with high indexes can create undefined "holes" in an array:
const fruits5 = ["Banana", "Orange", "Apple"];
fruits5[6] = "Lemon";  // Creates undefined "holes" in fruits 
// arrays are named indexes and arrays are numbered indexes
// Array.isArray(fruits);
// const fruits = ["Banana", "Orange", "Apple"];

// fruits instanceof Array;
//joining the array elemenet 
console.log(fruits3.toString());
// joining the array element in the array 
console.log(fruits3.join());
//When you work with arrays, it is easy to remove elements and add new elements.
//pops the last element and returns it
console.log(fruits3.pop());
//returns the no. of  element in the array
console.log(fruits3.push("lemon"));

console.log(fruits3);



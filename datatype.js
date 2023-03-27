/*
JavaScript has 8 Datatypes
1. String
2. Number
3. Bigint
4. Boolean
5. Undefined
6. Null
7. Symbol
8. Object

The Object Datatype
The object data type can contain:

1. An object
2. An array
3. A date
*/
// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// Object:
const person = {firstName:"John", lastName:"Doe"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");

//JavaScript has dynamic types. This means that the same variable can be used to hold different data types
let x1;       // Now x is undefined
x = 5;
{       // Now x is a Number
x = "John";  // Now x is a String
}
//js strings
// Using double quotes:
let carName1 = "Volvo XC60";

// Using single quotes:
let carName2 = 'Volvo XC60';
/*
You can use quotes inside a string, as long as they don't match the quotes surrounding the string
*/

// Single quote inside double quotes:
let answer1 = "It's alright";

// Single quotes inside double quotes:
let answer2 = "He is called 'Johnny'";

// Double quotes inside single quotes:
let answer3 = 'He is called "Johnny"';
//Extra large or extra small numbers can be written with scientific (exponential) notation
let y2 = 123e5;    // 12300000
let z = 123e-5;   // 0.00123

const person1 = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
console.log(typeof person1)

let car3;    // Value is undefined, type is undefined
let car4 = "";    // The value is "", the typeof is "string"

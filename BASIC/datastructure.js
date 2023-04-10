// array datastructure in js 
let myArray = [1, 2, 3, 4, 5];
console.log(myArray[2]); // Output: 3
// object datastructure in js
/*
Objects are another type of data structure that allow you to store collections of key-value pairs. In JavaScript, objects are used to represent complex data structures and are used extensively in web development. 
*/
let myObject = {
    name: "John",
    age: 30,
    hobbies: ["reading", "hiking"]
  };
  console.log(myObject.age); // Output: 30
/*
Maps are a new data structure introduced in ES6 that allow you to store collections of key-value pairs where the keys can be any type of value, not just strings like in objects. Maps also preserve the order of the keys as they were inserted.
*/
let myMap = new Map();
myMap.set("name", "John");
myMap.set("age", 30);
console.log(myMap.get("name")); // Output: John
/*
Sets are another new data structure introduced in ES6 that allow you to store collections of unique values. Sets can be used to remove duplicates from an array, 
*/
let mySet = new Set([1, 2, 3, 3, 4, 5, 5]);
console.log(mySet); // Output: Set {1, 2, 3, 4, 5}

  

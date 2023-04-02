//The shift() method removes the first array element and "shifts" all other elements to a lower index.
//The shift() method returns the value that was "shifted out":
//demonstration of shift method
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruit=fruits.shift();
console.log(fruit);
console.log(fruits);
//demonstration of unshift method
//The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements: 
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits2.unshift("Lemon");
//The unshift() method returns the new array length:
console.log(fruits2.unshift("Lemon"))
console.log(fruits2);
//
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
console.log(myChildren);
//merging three arrays
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren2 = arr1.concat(arr2, arr3);
//merging arrays with a value
const arr5 = ["Emil", "Tobias", "Linus"];
const myChildren3 = arr1.concat("Peter");
//flatening an array
const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
console.log(newArr); 
//The splice() method can be used to add new items to an array
//The first parameter (2) defines the position where new elements should be added (spliced in).
//The second parameter (0) defines how many elements should be removed.
//The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
//The splice() method returns an array with the deleted items: 
const fruits6 = ["Banana", "Orange", "Apple", "Mango"];
fruits6.splice(2, 0, "Lemon", "Kiwi");
const fruits7 = ["Banana", "Orange", "Apple", "Mango"];
fruits7.splice(2, 2, "Lemon", "Kiwi");


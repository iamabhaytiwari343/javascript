//ES6 are ordered: elements of the set can be iterated in the insertion order.
//it: It is an iterable object whose all elements are added to the new set created, If the parameter is not specified or null is passed then a new set created is empty.

// it contains
// ["sumit","amit","anil","anish"]
var set1 = new Set(["sumit","sumit","amit","anil","anish"]);
  
// it contains 'f', 'o', 'd'
var set2 = new Set("fooooooood");
  
// it contains [10, 20, 30, 40]
var set3 = new Set([10, 20, 30, 30, 40, 40]);
  
 // it is an  empty set
var set4 = new Set();

console.log(set1)
//Properties: 

//Set.size – It returns the number of elements in the Set.

//Methods of Set: 

//Set.add() – It adds the new element with a specified value at the end of the Set object.

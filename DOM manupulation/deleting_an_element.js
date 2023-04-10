// In an interactive web application, you will not only want to create and append a new element to the document but also remove any desired element.

//The removeChild() method is used to remove the child element from the parent element. The reference of the child element is passed as an argument to the method.

// syntax : parentElement.removeChild(childElement);

//parentElement - The reference of the parent element.
// childElement - The reference of the child element.
// Here is an example that removes the child element from the parent element:

// selecting parent and child
const parent = document.getElementById("parent");
const child = document.getElementById("secondChild");

// removing child from parent
parent.removeChild(child);

//The method removeChild returns a reference to the child node which is deleted.

// Note: You need to call the removeChild method from the parent of the child otherwise it will throw an error.
// The replaceChild() method is used to replace the child element with another element.

//syntax : parentElement.replaceChild(newChild, oldChild);

//parentElement - Parent element whose child is to be replaced.
//newChild - Element which will replace another one.
//oldChild - Element which will be replaced.

//The method returns the element which is replaced.

// selecting parent
const parent = document.getElementById("parent");
// selecting oldElement
const oldElement = document.getElementById("child");
// creating newElement which is h2
const newElement = document.createElement("h2");

function replace() {
  newElement.innerHTML = "This is new element, old element replaced by this."
  parent.replaceChild(newElement, oldElement);
}
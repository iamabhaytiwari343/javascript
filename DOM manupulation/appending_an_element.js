// We have created the element and also has stored the reference of the element in a variable, but the created element is floating aimlessly because DOM does not know about the created element till now.
// To make the created element a part of the document we have to explicitly attach it to the document using some methods.

// append() - It appends the Node objects or DOMString object to the parent element.
// appendChild() - It can append only Node objects to the parent element.

function addChild() {
    const parent = document.getElementById("parent"); // selecting parent
    const child = document.createElement("p"); // creating child
    child.innerHTML = "This is second child"; // adding some content

    // appending child to parent
    parent.append(child);
    // you can also use appendChild()
}
// The reference of Node element which has to be appended is passed as an argument to the method. The method calling element is known as the parent while the element which is appended is called the child.


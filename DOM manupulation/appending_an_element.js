function addChild() {
    const parent = document.getElementById("parent"); // selecting parent
    const child = document.createElement("p"); // creating child
    child.innerHTML = "This is second child"; // adding some content

    // appending child to parent
    parent.append(child);
    // you can also use appendChild()
}
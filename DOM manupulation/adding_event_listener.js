// The addEventListener() method is used to add an event listener to an element.

// An event listener is a function that is called when an event occurs on an element.

// Syntax : element.addEventListener(event, function);

/*element - The element on which the event is to be added.
event - The event which is to be added.
function - The function which is to be called when the event occurs.
Here is an example that adds mouseover event to the element: */

// selecting elemewhichnt
const element = document.getElementById("element");

// adding event listener
element.addEventListener("mouseover", function() {
  alert("Mouse is over the element.");
});


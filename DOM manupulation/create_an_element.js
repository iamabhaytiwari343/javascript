//To create a new element in the DOM, we need to use the document.createElement() method and pass the name of the element as an argument.
// creating paragraph element
var element = document.createElement('p');
// creating image element
var element1 = document.createElement('img');
// creating anchor element
var element2 = document.createElement('a');
//The reference of the created element is returned by the document.createElement() method and stored in the variable.
// The createElement() method converts the tag name of the element to lower case before creating the element. So you can pass element name both in lower case and upper case.
// capital letter
var element4 = document.createElement('IMG');
// lower case
var element5 = document.createElement('div');
// mixed case
var element6 = document.createElement('TaBlE');
// all of the above are valid code
//The element created by the createElement() method does not automatically attach to the document, we have to explicitly append elements to the document.
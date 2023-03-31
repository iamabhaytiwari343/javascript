// Define a constructor function for a Person object
function Person(name) {
    this.name = name;
  }
  
  // Add a method to the Person prototype
  Person.prototype.greet = function() {
    console.log("Hello, my name is " + this.name);
  };
  
  // Create a new Person object
  var person1 = new Person("Alice");
  
  // Call the greet() method, which is inherited from the Person prototype
  person1.greet(); // outputs "Hello, my name is Alice"
  
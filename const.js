const PI = 3.141592653589793;
//PI = 3.14;      // This will give an error
//PI = PI + 10;   // This will also give an error
console.log(PI)
//JavaScript const variables must be assigned a value when they are declared
/*
The keyword const is a little misleading.

It does not define a constant value. It defines a constant reference to a value.

Because of this you can NOT:

Reassign a constant value
Reassign a constant array
Reassign a constant object
But you CAN:

Change the elements of constant array
Change the properties of constant object
*/
// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");
console.log(cars);

// You can create a const object:
const car1 = {type:"Fiat", model:"500", color:"white"};

// You can change a property:
car1.color = "red";

// You can add a property:
car1.owner = "Johnson";
console.log(car1)
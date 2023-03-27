const car = {
    type:"Fiat",
     model:"500",
      color:"white"
    };
console.log(car)

const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

const person2 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
console.log(person.lastName)
console.log(person["lastName"])
person["lastName"];

const person4 = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };

  name = person4.fullName();
  console.log(name)
  name1 = person4.fullName;
  console.log(name1)
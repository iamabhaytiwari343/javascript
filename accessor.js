//ECMAScript 5 (ES5 2009) introduced Getter and Setters.Getters and setters allow you to define Object Accessors (Computed Properties).
// Create an object:
const person = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    get lang() {
      return this.language;
    }
  };
  
  // Display data from the object using a getter:
  console.log(person.lang);

  //demonstration of setter method
  const person1 = {
    firstName: "John",
    lastName: "Doe",
    language: "",
    set lang(lang) {
      this.language = lang;
    }
  };
  
  // Set an object property using a setter:
  person1.lang = "en";
  
  // Display data from the object:
  console.log(person.language);
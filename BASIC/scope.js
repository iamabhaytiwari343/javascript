//Variables declared within a JavaScript function, become LOCAL to the function.
{
    let x = 2;
  }
  // x can NOT be used here
  {
    var x1 = 2;
  }
  // x CAN be used here
  // code here can NOT use carName

function myFunction() {
    let carName = "Volvo";
    // code here CAN use carName
  }
  
  // code here can NOT use carName
  //Variables declared within a JavaScript function, become LOCAL to the function.
  //If you assign a value to a variable that has not been declared, it will automatically become a GLOBAL variable.

//This code example will declare a global variable carName, even if the value is assigned inside a function.
myFunction1();

// code here can use carName

function myFunction1() {
  carName = "Volvo";
}
//In "Strict Mode", undeclared variables are not automatically global.
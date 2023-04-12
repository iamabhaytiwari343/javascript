const myCar = {
   color: 'blue',
   type: 'sedan',
   doors: '4',
};

class Car {
   constructor(color, type, doors) {
      this.color = color;
      this.type = type;
      this.doors = doors
   }
}

const myCar2 = new Car('blue', 'sedan', '4');

const myPromise = new Promise(function(resolve, reject) {});

const myPromise2 = new Promise(function(resolve, reject) {
   resolve(10);
});

return new Promise((resolve, reject) => {
   if(somethingSuccesfulHappened) {
      const successObject = {
         msg: 'Success',
         data,//...some data we got back
      }
      resolve(successObject); 
   } else {
      const errorObject = {
         msg: 'An error occured',
         error, //...some error we got back
      }
      reject(errorObject);
   }
});

return new Promise((resolve, reject) => {
   if(somethingSuccesfulHappend) {
      resolve()
   } else {
      reject();
   }
});
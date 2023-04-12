//JavaScript is single threaded, meaning that two bits of script cannot run at the same time; they have to run one after another. A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.

var promise = new Promise(function(resolve, reject) {
  // do thing, then…

  if (/* everything worked */) {
    resolve("See, it worked!");
  }
  else {
    reject(Error("It broke"));
  }
});

/*
A Promise exists in one of these states
Pending: initial state, neither fulfilled nor rejected.
Fulfilled: operation completed successfully.
Rejected: operation failed.
*/

// The Promise object works as proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action’s eventual success value or failure reason.

// This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

// Using ‘Then’ (Promise Chaining)
// To take several asynchronous calls and synchronize them one after the other, you can use promise chaining. This allows using a value from the first promise in later subsequent callbacks.

Promise.resolve('some')
  .then(function(string) { // <-- This will happen after the above Promise resolves (returning the value 'some')
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        string += 'thing';
        resolve(string);
      }, 1);
    });
  })
  .then(function(string) { // <-- This will happen after the above .then's new Promise resolves
    console.log(string); // <-- Logs 'something' to the console
  });

/*
Promise API
There are 4 static methods in the Promise class:

Promise.resolve
Promise.reject
Promise.all
Promise.race

Promises can be chained together
When writing Promises to solve a particular problem, you can chain them together to form logic.
*/

var add = function(x, y) {
  return new Promise((resolve,reject) => {
    var sum = x + y;
    if (sum) {
      resolve(sum);
    }
    else {
      reject(Error("Could not add the two values!"));
    }
  });
};

var subtract = function(x, y) {
  return new Promise((resolve, reject) => {
    var sum = x - y;
    if (sum) {
      resolve(sum);
    }
    else {
      reject(Error("Could not subtract the two values!"));
    }
  });
};

// Starting promise chain
add(2,2)
  .then((added) => {
    // added = 4
    return subtract(added, 3);
  })
  .then((subtracted) => {
    // subtracted = 1
    return add(subtracted, 5);
  })
  .then((added) => {
    // added = 6
    return added * 2;    
  })
  .then((result) => {
    // result = 12
    console.log("My result is ", result);
  })
  .catch((err) => {
    // If any part of the chain is rejected, print the error message.
    console.log(err);
  });



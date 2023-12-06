// declaring a function in js .

function greet(name) {
    console.log(`Hello, ${name}!`);
}

// Calling the function
greet('Alice'); // Output: Hello, Alice!


//  anonymous functions

const greet = function (name) {
    console.log(`Hello, ${name}!`);
};

// Calling the function
greet('Bob'); // Output: Hello, Bob!

// 

const greet = (name) => {
    console.log(`Hello, ${name}!`);
};

// Calling the function
greet('Charlie'); // Output: Hello, Charlie!


// 

function add(a, b) {
    return a + b;
}

const result = add(5, 3); // result = 8

// 

function scopeExample() {
    const localVar = 'I am local';

    console.log(localVar); // Output: I am local
}

console.log(localVar); // Throws an error - localVar is not defined


// 

hoisted(); // This works fine

function hoisted() {
    console.log('Function was hoisted!');
}


// 

function doSomething(callback) {
    console.log('Doing something...');
    callback();
}

function callbackFunction() {
    console.log('Callback executed!');
}

doSomething(callbackFunction);

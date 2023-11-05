# javascript

refer to: https://roadmap.sh/javascript

# Understanding JavaScript Closures

Closures are a fundamental concept in JavaScript that may initially appear complex, but I'll explain them in simple terms with an example to make it more accessible.

## What are Closures?

Imagine you have a function within another function. The inner function has access to the variables and parameters of the outer function, even after the outer function has finished running. This is what we call a closure.

## Example

Let's illustrate closures with a simple example:

```javascript
function outerFunction(x) {
  // This is the outer function
  return function innerFunction(y) {
    // This is the inner function
    return x + y;
  };
}

const closure = outerFunction(10); // 'closure' now stores the inner function
const result = closure(5); // When we call 'closure', it still remembers 'x'
console.log(result); // Outputs 15
```

# Understanding Anonymous Functions and Arrow Functions in JavaScript

Anonymous functions and arrow functions are two different ways of writing functions in JavaScript. Let's explain them in simple terms with examples.

## Anonymous Function

An anonymous function is a function without a name. It's often used when you need a function for a short task, like passing it as an argument to another function. Here's how it looks:

```javascript
const add = function(x, y) {
  return x + y;
};

const result = add(3, 5);
console.log(result); // Outputs 8
```
# Arrow Functions

Arrow functions are a more concise way of writing functions, introduced in ES6 (ECMAScript 2015). They are especially handy for shorter functions. Here's how an arrow function works:

```javascript
const add = (x, y) => x + y;

const result = add(3, 5);
console.log(result); // Outputs 8
```
In this example, the arrow function add is defined using (x, y) => x + y, which is a shorter way of writing a function. It takes two parameters and returns their sum. The result is the same as with the anonymous function.

The key difference between the two is that arrow functions have a shorter syntax and automatically capture the value of this from their surrounding context, which can be beneficial in certain situations. Anonymous functions, on the other hand, are more flexible and allow you to name the function if needed.

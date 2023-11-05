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


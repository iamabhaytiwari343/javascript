const mySymbol = Symbol("description");
const myObject = {};
myObject[mySymbol] = "value";
console.log(myObject[mySymbol]); // output: "value"
// two symbols with the same description

const value1 = Symbol('hello');
const value2 = Symbol('hello');

console.log(value1 === value2); // false
// creating symbol
const x = Symbol()

typeof x; // symbol

const x1 = Symbol('hey');
console.log(x1); // Symbol(hey)

const x3 = Symbol('hey');
console.log(x3.description); // hey

let id = Symbol("id");

let person = {
    name: "Jack",

    // adding symbol as a key
    [id]: 123 // not "id": 123
};

console.log(person); // {name: "Jack", Symbol(id): 123}

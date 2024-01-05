# JavaScript Functions Cheatsheet 👩‍💻🚀

````markdown
## Function Declaration

```javascript
function sayHello() {
  console.log("Hello");
}
```
````

## Function Expression

```javascript
var sayBye = function () {
  console.log("Bye");
};
```

## Anonymous Function

```javascript
const func = function (name) {
  console.log("Hello " + name);
};
```

## First Class Functions

Functions can be passed as arguments to other functions:

```javascript
function square(x) {
  return x * x;
}

function displaySquare(fn) {
  console.log("Square is ", fn(5));
}

displaySquare(square); // Square is 25
```

## IIFE - Immediately Invoked Function Expression

```javascript
(function (name) {
  console.log("Hello " + name);
})("John"); // Hello John
```

## Function Scope

```javascript
function sayHello() {
  var message = "Hello";
  console.log(message);
}

sayHello(); // Hello

console.log(message); // ReferenceError: message is not defined
```

## Function Scope Output Question

```javascript
for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}
// 0 1 2 3 4

for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}
// 5 5 5 5 5
```

## Function Hoisting

```javascript
sayHello(); // Hello

function sayHello() {
  console.log("Hello");
}

var x = 21;

function funcscope() {
  console.log(x);
  var x = 20;
}

funcscope(); // undefined
```

## Parameters and Arguments

```javascript
function sayHello(name) {
  // name is a parameter
  console.log("Hello " + name);
}

sayHello("John"); // Hello John // John is an argument
```

## Rest vs Spread Operator

### Rest Operator

Used in function parameters to accept multiple arguments:

```javascript
function sum(...args) {
  // args is an array ** Used  at last parameter **
  console.log(args);
}

sum(1, 2, 3, 4, 5); // [1, 2, 3, 4, 5]
```

### Spread Operator

Used to spread an array into individual elements:

```javascript
function sum(x, y, z) {
  console.log(x + y + z);
}

const numbers = [1, 2, 3];

sum(...numbers); // 6 // Spread Operator is used here

const fn = function (x, y, z, ...nums) {
  console.log(x, y, z, nums);
};

fn(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); // 1 2 3 [4,5,6,7,8,9,10]
```

## Callback Functions

Functions passed as arguments to other functions:

```javascript
function sayHello(name) {
  console.log("Hello " + name);
}

function sayBye(name) {
  console.log("Bye " + name);
}

function greet(name, callback) {
  callback(name);
}

greet("John", sayHello); // Hello John

greet("John", sayBye); // Bye John
```

## Arrow Functions

Shorter syntax for writing functions:

```javascript
const square = (x) => {
  return x * x;
};

const square = (x) => x * x;
```

### Arrow Functions vs Regular Functions

1. **Implicit Return**

```javascript
const square = (x) => x * x;
```

2. **Arguments Object**

```javascript
const sum = (a, b) => {
  console.log(arguments);
  return a + b;
};

sum(1, 2); // ReferenceError: arguments is not defined
```

3. **`this` keyword**

```javascript
const person1 = {
  name: "John",
  sayHello: function () {
    console.log("Hello " + this.name);
  },
};

person.sayHello(); // Hello John

const person = {
  name: "John",
  sayHello: () => {
    console.log("Hello " + this.name);
  },
};

person.sayHello(); // Hello undefined
```

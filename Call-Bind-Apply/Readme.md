````markdown
# Call, Bind, and Apply in JavaScript (Explicit Binding) :mag:

Understanding `call`, `bind`, and `apply` can be quite a game-changer in your JavaScript journey. These are the mighty methods that let you take control of the execution context, also known as the infamous `this` keyword!

## What is `call`? :telephone_receiver:

`call` is a method that invokes a function with a specified `this` value, and arguments passed in individually.

```javascript
var obj = { name: "Akash" };

function sayHello(age) {
  return `Hello ${this.name} ${age}`;
}

console.log(sayHello()); // Output: Hello undefined
console.log(sayHello.call(obj, 23)); // Output: Hello Akash 23
```
````

## What is `apply`? :open_hands:

`apply` is similar to `call`, but instead of passing the arguments individually, it takes an array of arguments.

```javascript
console.log(sayHello.apply(obj, [23, "Delhi"])); // Output: Hello Akash 23 Delhi
```

## What is `bind`? :link:

`bind` also sets the `this` value for a function, but it returns a new function with the specified context, and can be executed later.

```javascript
var bindFunc = sayHello.bind(obj, 23, "Delhi");
console.log(bindFunc()); // Output: Hello Akash 23 Delhi
```

## Quirky Interviews Questions and How You Might Answer Them :face_with_monocle:

### Interview Question 1

What will the following code output?

```javascript
const person = { name: "Akash" };
function sayHi(age) {
  return `${this.name} is ${age} years`;
}

console.log(sayHi.call(person, 24)); // Akash is 24 years
console.log(sayHi.bind(person, 24)); // Function: bound sayHi
```

:bangbang: Note: `bind` returns a new function instead of invoking it.

### Interview Question 2

Does the following code produce the same output?

```javascript
console.log(student.getAge.call(person2)); // 24
console.log(student.getAge.apply(person2)); // 24
console.log(student.getAge.bind(person2)()); // 24
```

Yes, all produce the same output: `24`. `call`, `apply`, and `bind` are all used to set `this` to `person2`, but `bind` requires an additional function call.

### Interview Question 3

What does the after `setTimeout` log?

```javascript
var status = "😎";

setTimeout(() => {
  const data = {
    status: "🥑",
    getStatus() {
      return this.status;
    },
  };
  console.log(data.getStatus()); // 🥑
  console.log(data.getStatus.call(this)); // 😎
}, 0);
```

Inside `setTimeout`, `this` will refer to the global object due to arrow function context.

### Interview Question 4

How do you print all animals in the given object?

```javascript
const animals = [
  { species: "Lion", name: "King" },
  { species: "Whale", name: "Queen" },
];

for (var i = 0; i < animals.length; i++) {
  printAnimals.call(animals[i], i);
}
```

:rocket: Just call `printAnimals` with the correct context!

### Interview Question 5-7 & more

There are loads of neat tips and tricks embedded in the following questions. You can know how to append arrays (`array.push.apply(array, elements)`), find the min/max in an array... jsonObject) and `bind` (`user.g()` with `null` context leads to [object Window]).

### Polyfills - Bringing Older Browsers Up to Speed :old_key:

Do you need a `call`, `apply`, or `bind` but you're stuck in 2007 web development? No problem! Polyfills have got your back, ensuring older browsers can keep up with the modern JS functionalities. Here's how you create them from scratch:

```javascript
// Polyfill for Call Method
Function.prototype.myCall = function (context = {}, ...args) {
  // your implementation
};

// Polyfill for Apply Method
Function.prototype.myApply = function (context = {}, args = []) {
  // your implementation
};

// Polyfill for Bind Method
Function.prototype.myBind = function (context = {}, ...args) {
  // your implementation
};
```

:tada: And you implement them just like they were there all along, allowing you to wield full control over `this`, even when the engines that run JavaScript say "I can't do that... yet".

Ready to tackle the global scope, arrow functions, and `this` keyword all

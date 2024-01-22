// Call, Bind and Apply in Javascript (Expiicit Binding)
// Question 1 - What is Call?
// Answer - Call is a method that is used to call a function with a
// given this value and arguments provided individually.

var obj = { name: "Akash" };

function sayHello(age) {
  return "Hello " + this.name + " " + age;
}

console.log(sayHello()); // Hello undefined
console.log(sayHello.call(obj, 23)); // Hello Akash 23

// Question 2 - What is Apply?
// Answer - Apply is a method that is used to call a function with a
// given this value and arguments provided as an array.

var obj = { name: "Akash" };

function sayHello(age, city) {
  return "Hello " + this.name + " " + age + " " + city;
}

console.log(sayHello()); // Hello undefined
console.log(sayHello.apply(obj, [23, "Delhi"])); // Hello Akash 23 Delhi

// Question 3 - What is Bind?
// Answer - Bind is a method that is used to call a function with a
// given this value and arguments provided individually. But the difference
// between call and bind is that bind returns a new function.

var obj = { name: "Akash" };

function sayHello(age, city) {
  return "Hello " + this.name + " " + age + " " + city;
}

console.log(sayHello()); // Hello undefined
var bindFunc = sayHello.bind(obj, 23, "Delhi");
console.log(bindFunc()); // Hello Akash 23 Delhi

// Interview Question 1 - Find the output of the following code

const person = { name: "Akash" };

function sayHi(age) {
  return `${this.name} is ${age} years`;
}

console.log(sayHi.call(person, 24)); // Akash is 24 years
console.log(sayHi.bind(person, 24)); // [Function: bound sayHi]

// Interview Question 2 - Find the output of the following code

const age = 10;
var student = {
  name: "Akash",
  age: 20,
  getAge: function () {
    return this.age;
  },
};

var person2 = { age: 24 };
console.log(student.getAge.call(person2)); // 24
console.log(student.getAge.apply(person2)); // 24
console.log(student.getAge.bind(person2)()); // 24

// Interview Question 3 - Find the output of the following code

var status = "😎";

setTimeout(() => {
  const status = "😍";

  const data = {
    status: "🥑",
    getStatus() {
      return this.status;
    },
  };

  console.log(data.getStatus()); // 🥑
  console.log(data.getStatus.call(this)); // 😎
}, 0);

// Interview Question 4 - Find the output of the following code
// write printAnimals() in such a way that it prints all animals in object below.

const animals = [
  { species: "Lion", name: "King" },
  { species: "Whale", name: "Queen" },
];

function printAnimals(i) {
  this.print = function () {
    console.log("#" + i + " " + this.species + ": " + this.name);
  };
  this.print();
}

// Solution
for (var i = 0; i < animals.length; i++) {
  printAnimals.call(animals[i], i);
}

// Interview Question 5 - Find the output of the following code
// How to append an array to another array.

const array = ["a", "b"];
const elements = [0, 1, 2];

array.push(elements); // ['a', 'b', [0, 1, 2]] ❌
array.push(...elements); // ['a', 'b', 0, 1, 2] ✅
array.push.apply(array, elements); // ['a', 'b', 0, 1, 2] ✅

// Interview Question 6 - Find the output of the following code
// 6. Find min/max in an array and use apply to enhance a built-in function.

const numbers = [5, 6, 2, 3, 7];

// using Math.min/Math.max apply

let max = Math.max.apply(null, numbers);

let min = Math.min.apply(null, numbers);

// Interview Question 7 - Find the output of the following code
// Create a bound function

function f() {
  alert(this); // ?
}

let user = {
  g: f.bind(null),
};

user.g(); // [object Window] or null

// Question 8 Fix the line 22 to make code work properly
function checkPassword(success, failed) {
  let password = prompt("Password?", "");
  if (password == "Roadside Coder") success();
  else failed();
}

let user5 = {
  name: "Akash",
  loginSuccessful() {
    console.log(`${this.name} logged in`);
  },
  loginFailed() {
    console.log(`${this.name} failed to log in`);
  },
};
checkPassword(user.loginSuccessful.bind(user5), user.loginFailed.bind(user5)); // Akash logged in

// Call, Bind and Apply in Javascript (Explicit Binding)
// Question 9 - Partial application for login function
function checkPassword(ok, fail) {
  let password = prompt("Password?", "");
  if (password == "Roadside Coder") ok();
  else fail();
}
let user6 = {
  name: "Akash",
  login(result) {
    console.log(this.name + (result ? "login successful" : "11 login failed"));
  },
};
checkPassword(user6.login.bind(user6, true), user6.login().bind(user6, false)); // Akash login successful

// Question 10 Explicit Binding with Arrow Function
const age1 = 10;

var person1 = {
  name: "Piyush",
  age1: 20,
  getAgeArrow: () => console.log(this.age1),
  getAge: function () {
    console.log(this.age1);
  },
};
var person2 = { age1: 24 };
person1.getAge.call(person2); // ? 10
person1.getAge.call(person2); // 24

// Question 11- Polyfill for Call Method
let car1 = {
  color: "Red",
  company: "Ferrari",
};
function purchaseCar(currency, price) {
  console.log(
    `I have purchased ${this.color} ${this.company} car for ${currency}${price}`
  );
}
purchaseCar.call(car1, "$", 5000000); // I have purchased Red Ferrari car for $5000000

// Polyfill for Call Method
Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "It's not Callable");
  }
  context.fn = this;
};
purchaseCar.call(carl, "$", 5000000); // I have purchased Red Ferrari car for $5000000

// Question 12- Polyfill for Apply Method

Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== "function") {
    throw new Error(this + "It's not Callable");
  }
  if (!Array.isArray(args)) {
    throw new TypeError("CreateListFromArrayLike called on non-object");
  }
  context.fn = this;
  context.fn(...args);
};
purchaseCar.myApply(car1, ["7", 5000000]); // I have purchased Red Ferrari car for $5000000

// Question 13- Polyfill for Bind Method

Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "cannot be bound as it's not callable");
  }
  context.fn = this;
  return function (...newArgs) {
    return context.fn(...args, ...newArgs);
  };
};
const newFunc = purchaseCar.myBind(car1);
console.log(newFunc("$", 5000000)); // I have purchased Red Ferrari car for $5000000

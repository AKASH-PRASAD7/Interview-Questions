// 'this' Keyword in JavaScript (Implicit Binding)
// Explain 'this' keyword in JavaScript?

/*

Implicit Binding
Implicit Binding is applied when you invoke a function in an Object using the dot notation. this in such scenarios will point to the object using which the function was invoked. Or simply the object on the left side of the dot.

Explicit Binding
In Explicit Binding, you can force a function to use a certain object as its this. Explicit Binding can be applied using call(), apply(), and bind().

*/

this.a = 5;

console.log(this); // Window object
console.log(window.a); // 5
console.log(this.a); // 5
console.log(a); // 5

const user = {
  name: "John",
  age: 25,
  printName: function () {
    console.log(this.name);
  },
  printAge: () => {
    console.log(this.age);
  },
};

user.printName(); // John
user.printAge(); // undefined

let user1 = {
  name: "Tom",
  age: 25,
  getDetails() {
    const nestedArrow = () => console.log(this.name);
    nestedArrow();
  },

  getAge: () => {
    console.log(this.age);
  },
};

user1.getDetails(); // Tom
user1.getAge(); // undefined

class person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  printName() {
    console.log(this.name);
  }
}

const person1 = new person("John", 25);
person1.printName(); // John

// Question 1: What is the output of the following code?

const user2 = {
  firstName: "Akash!",
  getName() {
    const firstName = "Jen!";
    return this.firstName;
  },
};
console.log(user2.getName()); // What is logged?
// Akash!

// Question 2: What is the output of the following code?

function makeUser() {
  return {
    name: "John",
    ref: this,
  };
}

let userObj = makeUser();

alert(userObj.ref.name); // What's the result?
console.log(userObj.ref); // Window object
// Error

// Solution
function makeUser() {
  return {
    name: "Akash",
    ref() {
      return this;
    },
  };
}

let user4 = makeUser();

alert(user4.ref().name); // Akash

// Question 3: What is the output of the following code?

const user5 = {
  name: "Akash!",
  logMessage() {
    console.log(this.name);
  },
};

setTimeout(user5.logMessage, 1000); // What is logged?
// undefined

// Solution

setTimeout(function () {
  user5.logMessage;
}, 1000);
// Akash!

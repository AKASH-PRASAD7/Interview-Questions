// Objects in JavaScript

const person = {
  name: "John",
  age: 20,
  "Is gender Male": true,
};

// Dot Notation
console.log(person.name); // John

// Bracket Notation
console.log(person["name"]); // John
console.log(person["Is gender Male"]); // true

// Dynamic Notation
const selection = "name";
console.log(person[selection]); // John

// Adding Properties
person.location = "Australia";
console.log(person.location); // Australia

// Deleting Properties
delete person.location;
console.log(person.location); // undefined

// Output question
const func = (function (a) {
  delete a;
  return a;
})(5);
console.log(func); // 5

// Dynamic Properties

const property = "firstname";
const name = "Akash";

const person = {
  [property]: name,
};

// looping through objects

const person = {
  name: "John",
  age: 20,
  gender: "male",
};

for (let key in person) {
  console.log(key, person[key]);
}

// Question 1

const obj = {
  a: "one",
  b: "two",
  a: "three",
};
console.log(obj); // {a: "three", b: "two"} // Duplicate keys are not allowed in objects
// If duplicate keys are present, then the last key will be used

// Question 2 - Create a function multiplyByTwo(obj) that
//              multiplies all numeric property values of nums by 2.
let nums = {
  a: 100,
  b: 200,
  title: "My nums",
};
multiplyNumeric(obj);

// Solution
const multiplyNumeric = (obj) => {
  for (let key in obj) {
    if (!isNaN(obj[key])) {
      obj[key] *= 2;
    }
  }
};
multiplyNumeric(nums);

// Question 3 - What's the Output of the following code?
const a = {};
const b = { key: "b" };
const с = { key: "C" };
a[b] = 123;
a[c] = 456;

console.log(a[b]); // 456 // Objects are converted to strings when used as keys
// So, a[b] = a["object Object"] = 123
// So, a[c] = a["object Object"] = 456

// Question 4 - What's the Output ?
console.log([..."Lydia"]); // ["L", "y", "d", "i", "a"]

// Question 5 - What's the Output ?

const settings = {
  username: "Akash",
  level: 19,
  health: 90,
};

const data = JSON.stringify(settings, ["level", "health"]);
console.log(data); // {"level":19,"health":90}

// Question 6 - What's the Output ?

const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },

  perimeter: () => 2 * Math.PI * this.radius,
};

console.log(shape.diameter()); // 20
console.log(shape.perimeter()); // NaN

// Question 7

let user = {
  name1: "Akash",
  age: 23,
  fullname: {
    first: "John",
    last: "cena",
  },
};

const name1 = "yolo";

const { name1: myName } = user;
console.log(myName); //Akash;

const {
  fullname: { first },
} = user;
console.log(first); //John

// Question 8 - What's the output?
function getItems(fruitList, favoriteFruit, ...args) {
  return [...fruitList, ...args, favoriteFruit];
}

console.log(getItems(["banana", "apple"], "pear", "orange")); // ["banana", "apple", "orange", "pear"]

// Question 9 - What's the output?

let c = { greeting: "Hey!" };
let d;
d = c; // Reference types are copied by reference, not by value
c.greeting = "hello";
console.log(d.greeting); // hello

// Question 10 - What s the outputs

console.log({ a: 1 } == { a: 1 }); // false
console.log({ a: 1 } === { a: 1 }); // false

// Question 11 - What's the output?
let person = { name: "Lydia" };
const members = [person];
person = null;

console.log(members); // [{name: "Lydia"}] // Objects are copied by reference, not by value

// Question 12 - What's the output?
const value = { number: 10 };
const multiply = (x = { ...value }) => {
  console.log((x.number *= 2));
};

multiply(); // 20
multiply(); // 20
multiply(value); // 20
multiply(value); // 40

// Expalnation - The default value of x is a new object that contains
//  all the properties that were on the value object. Since objects are
//  copied by reference, the value object will be modified each time we
//  invoke the multiply function. When we pass the value object as an
//  argument, the default value will not be used, since we are passing
//  an argument. The value object itself will be modified again, so its
//  number property will now be 40.

// Question 12 - What's the output?

function changeAgeAndReference(person) {
  person.age = 25;
  person = {
    name: "John",
    age: 50,
  };

  return person;
}

const personObj1 = {
  name: "Alex",
  age: 30,
};

const personObj2 = changeAgeAndReference(personObj);

console.log(personObj1); // {name: "Alex", age: 25}
console.log(personObj2); // {name: "John", age: 50}

// Question 13 - What's shallow copy and deep copy?

// Shallow copy - A shallow copy will only copy the values of the first level of an object.
//                If the original value of the first-level property is a reference value
//                (e.g. an array or an object), the copy will point to the same memory address
//                as the original and changing the values of one will change the values of the other.

// Deep copy - A deep copy will copy the values of all levels of an object and will
//             not reference the same memory address as the original object does.

// Question 14 - How to deep copy an object/ clone an object?

// Solution 1 - Using JSON.parse(JSON.stringify(obj))
const person = {
  name: "Akash",
  age: 23,
  hobbies: ["Coding", "Reading"],
};

const clone = JSON.parse(JSON.stringify(person));
console.log(clone); // {name: "Akash", age: 23, hobbies: Array(2)}

// Solution 2 - Using Object.assign()

const clone1 = Object.assign({}, person);

// Solution 3 - Using spread operator

const clone2 = { ...person };

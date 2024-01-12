// Closures in JavaScript
// Lexical Scope
/* 
   Defination of Lexical Scope: When a function is defined, it gets a [[scope]] property 
   that references the Local Memory in which the function was defined.

*/

const name = "John Doe"; // Global Scope

const printName = () => {
  // Local Scope
  console.log(name);
  /* Lexical Scope : name is not defined in the local scope but 
        it can access the global scope this is 
        called lexical scope */
};

printName(); // John Doe

// Closure
/* 
    Defination of Closure: A closure is a function that has access to its outer function scope even after the outer function has returned. 
    This means a closure can remember and access variables and arguments of its outer function even after the function has finished.
*/

// global scope
const outerFunction = (outerVariable) => {
  // outerFunction's local scope
  const innerFunction = () => {
    // innerFunction's local scope
    console.log("Outer Variable: " + outerVariable);
  };
  innerFunction();
};

outerFunction("global"); // Outer Variable: global Inner Variable: closure

// Example 2

function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();

// Closure scope chain

// global scope
const e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      // outer functions scope
      return function (d) {
        // local scope
        return a + b + c + d + e;
      };
    };
  };
}

console.log(sum(1)(2)(3)(4)); // 20

// Ques 1 -> Write a function that would allow you to do this.
// var  addSix = createBase(6);
// addSix(10); //16
// addSix(21); //27

const createBase = (outerNum) => {
  return (innerNum) => {
    console.log(outerNum + innerNum);
  };
};

var addSix = createBase(6);
addSix(10); //16
addSix(21); //27

// Ques 2 -> Time Optimization

function find(index) {
  let a = [];
  for (let i = 0; i < 100000; i++) {
    a[i] = i * i;
  }
  console.log(a[index]);
}

console.time("6");
find(6);
console.timeEnd("6");
console.time("50");
find(50);
console.timeEnd("50");

// Solution

function find() {
  let a = [];
  for (let i = 0; i < 100000; i++) {
    a[i] = i * i;
  }
  return function (index) {
    console.log(a[index]);
  };
}

const closure = find();
console.time("6");
closure(6);
console.timeEnd("6");
console.time("50");
closure(50);
console.timeEnd("50");

// Ques 3

function a() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}

a(); // 6 6 6 6 6

// Reason -> var is function scoped and the value of i is 6 when the
// setTimeout callback function is executed.

// Solution

function a() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}

a(); // 1 2 3 4 5

// Reason -> let is block scoped and the value of i is the value of i when the
// setTimeout callback function is executed.

// Solution 2

function a() {
  for (var i = 1; i <= 5; i++) {
    function close(x) {
      setTimeout(function () {
        console.log(x);
      }, x * 1000);
    }
    close(i);
  }
}

a(); // 1 2 3 4 5

// Reason -> var is function scoped and the value of i is the value of i when the
// setTimeout callback function is executed.

// Ques 4 -> Create Private Counter

const counter = () => {
  let count = 0;
  return () => {
    count++;
    return count;
  };
};

const counter1 = counter();
console.log(counter1()); // 1

// Ques 5 -> Create Module Pattern

const Module = (() => {
  let count = 0;
  const changeBy = (val) => {
    count += val;
  };
  return {
    increment: () => {
      changeBy(1);
    },
    decrement: () => {
      changeBy(-1);
    },
    value: () => {
      return count;
    },
  };
})();

console.log(Module.value()); // 0
Module.increment();

// Ques 6 -> Make this run only once

const runOnce = (() => {
  let count = 0;
  return () => {
    if (count < 1) {
      count++;
      console.log("Hello");
    }
  };
})();

runOnce(); // Hello
runOnce(); // Nothing

// Ques 7 -> Implement Memoization and Caching function
// Memoize -> An optimization technique used primarily to speed up computer programs by storing the
// results of expensive function calls and returning the cached result when the same inputs occur again.

const clumsySquare = (n) => {
  for (let i = 0; i < 1000000000; i++) {}
  console.log(n * n);
};

console.time("first call");
clumsySquare(4); // 16
console.timeEnd("first call");

console.time("second call");
clumsySquare(4); // 16
console.timeEnd("second call");

// Solution

const memoize = (fn) => {
  const cache = {};
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }
    const output = fn.apply(this, args);
    cache[args] = output;
    return output;
  };
};

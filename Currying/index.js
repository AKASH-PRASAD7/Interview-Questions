// Currying in JavaScript
// Currying is a technique of evaluating function with multiple arguments,
// into sequence of function with single argument.
// Example f(a,b) => f(a)(b)

function f(a) {
  return function (b) {
    console.log(a, b);
  };
}

f(1); // function (b) { console.log(a, b); }
f(1)(2); // 1 2

/* --------------------- 
Why should currying be used?
Following are the reasons why currying is good :

✅ It makes a function pure which makes it expose to less errors and side effects.

✅ It helps in avoiding the same variable again and again.

✅ It is a checking method that checks if you have all the things before you proceed.

✅ It divides one function into multiple functions so that one handles one set of responsibility.

*/

// Question 1 : Sum(a)(b)(c) implement this function

// 1st method
function Sum(a) {
  return function (b) {
    return function (c) {
      console.log(a + b + c);
    };
  };
}

Sum(1)(2)(3); //6

//2nd method
const Sum = (a) => (b) => (c) => console.log(a + b + c);

Sum(1)(2)(3); //6

// Question 2
/*
Evaluate("sum")(2)(4) => 6
Evaluate("sub")(2)(4) => -2
Evaluate("mul")(2)(4) => 8
Evaluate("div")(4)(2) => 2
*/

function Evaluate(operation) {
  switch (operation) {
    case "sum":
      return (b) => (c) => console.log(b + c);

    case "sub":
      return (b) => (c) => console.log(b - c);

    case "mul":
      return (b) => (c) => console.log(b * c);

    case "div":
      return (b) => (c) => console.log(b / c);

    default:
      return (b) => (c) => console.log("Invalid opertaion");
  }
}

Evaluate("sum")(2)(4); // 6
Evaluate("sub")(2)(4); // -2
Evaluate("mul")(2)(4); // 8
Evaluate("div")(4)(2); // 2

const mul = Evaluate("mul");
mul(2)(4); // 8

// Question 3 : Infinity Currying add(1)(2)();

function add(a) {
  return function (b) {
    if (b) {
      return add(a + b);
    }
    return a;
  };
}

add(1)(2)(); // 3
add(1)(2)(3)(); // 6

// Question 4 : Currying vs Partial Application

// Currying
function add(a) {
  return function (b) {
    return a + b;
  };
}

add(1)(2); // 3

// Partial Application

function add(a, b) {
  return a + b;
}

add(1, 2); // 3

// Manupulating DOM with Currying

function updateElementText(id) {
  return function (content) {
    document.querySelector("#" + id).textContent == content;
  };
}
const updateHeader = updateElementText("Hello");
updateHeader("hi hello hola");

// Currying Implementaion
function curry(func) {
  return function curriedFunc(...args) {
    // console. log (args length, func. length);
    if (args.length >= func.length) {
      return func(...args);
    } else {
      return function (...next) {
        return curriedFunc(...args, ...next);
      };
    }
  };
}

const sum = (a, b, C, d) => a + b + C + d;
const totalSum = curry(sum);
console.log(totalSum(1));

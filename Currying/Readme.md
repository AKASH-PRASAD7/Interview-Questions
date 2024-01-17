# Currying in JavaScript

````markdown
Currying is a technique in JavaScript that involves evaluating a function with multiple arguments as a sequence of functions with single arguments. The basic idea is to transform a function `f(a, b)` into `f(a)(b)`.

## Why Currying?

Currying offers several advantages:

✅ **Pure Functions:** Currying makes a function pure, reducing errors and side effects.

✅ **Variable Reuse:** It helps avoid redundant use of the same variable.

✅ **Checking Mechanism:** Acts as a checking method before proceeding to ensure all necessary parameters are available.

✅ **Responsibility Division:** Divides a function into multiple functions, each handling a specific set of responsibilities.

## Examples

### 1. Sum Function

```javascript
// Method 1
function Sum(a) {
  return function (b) {
    return function (c) {
      console.log(a + b + c);
    };
  };
}

// Method 2
const Sum = (a) => (b) => (c) => console.log(a + b + c);

Sum(1)(2)(3); // 6
```
````

### 2. Operation Evaluator

```javascript
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
      return (b) => (c) => console.log("Invalid operation");
  }
}

Evaluate("sum")(2)(4); // 6
Evaluate("sub")(2)(4); // -2
Evaluate("mul")(2)(4); // 8
Evaluate("div")(4)(2); // 2
```

### 3. Infinity Currying

```javascript
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
```

### 4. Manipulating DOM with Currying

```javascript
function updateElementText(id) {
  return function (content) {
    document.querySelector("#" + id).textContent = content;
  };
}

const updateHeader = updateElementText("Hello");
updateHeader("hi hello hola");
```

### 5. Currying Implementation

```javascript
function curry(func) {
  return function curriedFunc(...args) {
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
```

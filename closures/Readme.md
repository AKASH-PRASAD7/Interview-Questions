# Closures in JavaScript

````markdown
## Lexical Scope 🌐

Lexical scope refers to the ability of a function to access variables from its containing scope. When a function is defined, it gets a `[[scope]]` property that references the Local Memory in which the function was defined.

```javascript
const name = "John Doe"; // Global Scope

const printName = () => {
  // Local Scope
  console.log(name);
  // Lexical Scope: name is not defined in the local scope but can be accessed from the global scope.
};

printName(); // Outputs: John Doe
```
````

## Closure 📦

A closure is a function that retains access to its outer function scope even after the outer function has returned. This enables a closure to remember and access variables and arguments of its outer function even after the function has finished.

```javascript
// Global scope
const outerFunction = (outerVariable) => {
  const innerFunction = () => {
    console.log("Outer Variable: " + outerVariable);
  };
  innerFunction();
};

outerFunction("global"); // Outputs: Outer Variable: global Inner Variable: closure
```

## Closure Scope Chain 🔄

Closure scope chain allows nested functions to access variables from their outer functions.

```javascript
// Global scope
const e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        // Local scope
        return a + b + c + d + e;
      };
    };
  };
}

console.log(sum(1)(2)(3)(4)); // Outputs: 20
```

## Examples and Solutions 🧩

### 1. Creating a Base Function

```javascript
const createBase = (outerNum) => {
  return (innerNum) => {
    console.log(outerNum + innerNum);
  };
};

var addSix = createBase(6);
addSix(10); // Outputs: 16
addSix(21); // Outputs: 27
```

### 2. Time Optimization

```javascript
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
closure(6); // Outputs: ... (same as provided)
closure(50); // Outputs: ...
```

### 3. Handling `setTimeout` with `let` and `var`

```javascript
// Original Code
function a() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}

a(); // Outputs: 1 2 3 4 5

// Solution with `var`
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

a(); // Outputs: 1 2 3 4 5
```

### 4. Private Counter

```javascript
const counter = () => {
  let count = 0;
  return () => {
    count++;
    return count;
  };
};

const counter1 = counter();
console.log(counter1()); // Outputs: 1
```

### 5. Module Pattern

```javascript
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

console.log(Module.value()); // Outputs: 0
Module.increment();
```

### 6. Run Once Function

```javascript
const runOnce = (() => {
  let count = 0;
  return () => {
    if (count < 1) {
      count++;
      console.log("Hello");
    }
  };
})();

runOnce(); // Outputs: Hello
runOnce(); // Outputs: Nothing
```

### 7. Memoization and Caching

```javascript
const clumsySquare = (n) => {
  for (let i = 0; i < 1000000000; i++) {}
  console.log(n * n);
};

console.time("first call");
clumsySquare(4); // Outputs: 16
console.timeEnd("first call");

console.time("second call");
clumsySquare(4); // Outputs: 16
console.timeEnd("second call");

// Solution with Memoization
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

const memoizedClumsySquare = memoize(clumsySquare);
console.time("first call (memoized)");
memoizedClumsySquare(4); // Outputs: 16
console.timeEnd("first call (memoized)");

console.time("second call (memoized)");
memoizedClumsySquare(4); // Outputs: 16
console.timeEnd("second call (memoized)");
```

# JavaScript Variables and Scope Cheatsheet 🚀

````markdown
## VAR, LET, CONST and Scope 🔍

In JavaScript, we use `var`, `let`, and `const` to declare variables, each with its own scope.

```javascript
// Global Scope
num = 10; // 🌍 Global scope

{
  // Block scope
}

function a() {
  // Function scope
}
```
````

### Variable Scope 🎯

```javascript
// Variable Scope
var num = 10; // 🌍 Global scope
let num1 = 10; // 🔒 Block/local scope
const num2 = 10; // 🔒 Block/local scope
```

### Variable Shadowing 👥

```javascript
// Variable Shadowing
function test() {
  let a = "Hello";

  if (true) {
    let a = "Hi"; // 🌑 Shadowing the variable a
    console.log(a); // Hi
  }
  console.log(a); // Hello
}
```

### Illegal Shadowing ❌

```javascript
// Illegal Shadowing
function test() {
  let a = "Hello";

  if (true) {
    var a = "Hi"; // ❌ Illegal shadowing the variable a
    console.log(a); // Hi
  }
  console.log(a); // Hi
}
```

### Redeclaration 🔄

```javascript
// Redeclaration
var a = 10;
var a = 20; // ✅ Legal redeclaration

let b = 10;
let b = 20; // ❌ Illegal redeclaration

const c = 10;
const c = 20; // ❌ Illegal redeclaration
```

### Declaration and Initialization 🚀

```javascript
// Declaration and Initialization
var a; // ✅ Valid declaration
let b; // ✅ Valid declaration
const c; // ❌ Invalid declaration
```

### Reinitialization 🔄

```javascript
// Reinitialization
var a = 10;
a = 5; // ✅ Valid reinitialization

let b = 10;
b = 5; // ✅ Valid reinitialization

const c = 10;
c = 5; // ❌ Invalid reinitialization
```

### Hoisting 🏗️

```javascript
// Hoisting
console.log(a); // undefined
var a = 10;

console.log(b); // ReferenceError: b is not defined
let b = 10;

console.log(c); // ReferenceError: c is not defined
const c = 10;
```

### Temporal Dead Zone ⚰️

The Temporal Dead Zone is a behavior that occurs with variables declared using `let` and `const` keywords.

```javascript
console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 10;

console.log(b); // ReferenceError: Cannot access 'b' before initialization
const b = 10;
```

### Global Object 🌐

```javascript
// Global Object
var a = 10;
console.log(window.a); // 10

let b = 10;
console.log(window.b); // undefined

const c = 10;
console.log(window.c); // undefined
```

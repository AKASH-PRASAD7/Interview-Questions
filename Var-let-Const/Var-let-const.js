// VAR LET CONST
// Scope

num = 10; //Global Scope 

{
  // block scope 
}

function a() {
  //function Scope 
}

// Variable Scope

var num = 10; // global scope 
let num1 = 10; // block/local scope 
const num2 = 10; // block/local scope 

// Variable Shadowing

function test() {
  let a = "Hello";

  if (true) {
    let a = "Hi"; // shadowing the variable a
    console.log(a); // Hi
  }
  console.log(a); // Hello
}

// Illegal Shadowing

function test() {
  let a = "Hello";

  if (true) {
    var a = "Hi"; // illegal shadowing the variable a
    console.log(a); // Hi
  }
  console.log(a); // Hi
}

// Redeclaration

var a = 10;
var a = 20; // legal redeclaration

let b = 10;
let b = 20; // illegal redeclaration

const c = 10;
const c = 20; // illegal redeclaration

// Declaration and Initialization

var a; // Valid declaration 
let b; // Valid declaration
const c; // Invalid declaration

// Reinitalization

var a = 10; 
a=5; // Valid reinitialization
let b = 10; 
b=5; // Valid reinitialization
const c = 10;
c=5; // Invalid reinitialization

// Hoisting

console.log(a); // undefined
var a = 10;

console.log(b); // ReferenceError: b is not defined
let b = 10;

console.log(c); // ReferenceError: c is not defined
const c = 10;

// Temporal Dead Zone
// Defination - The temporal dead zone is a behavior that occurs with variables declared using let and const keywords.

console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 10;

console.log(b); // ReferenceError: Cannot access 'b' before initialization
const b = 10;

// Global Object

var a = 10;
console.log(window.a); // 10

let b = 10;
console.log(window.b); // undefined

const c = 10;
console.log(window.c); // undefined


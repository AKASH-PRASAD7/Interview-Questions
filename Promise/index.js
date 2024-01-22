// Promises in JavaScript
// Promises are a way to handle asynchronous operations in JavaScript.
// They are easy to manage when dealing with multiple asynchronous operations
// where callbacks can create callback hell leading to unmanageable code.

// Prior to promises events and callback functions were used but they had limited
// functionalities and created unmanageable code. Multiple callback functions would
// create callback hell that leads to unmanageable code. Events were not good at
// handling asynchronous operations.

// Synchronous vs Asynchronous Code

console.log("start");
function importantAction(username) {
  setTimeout(() => {
    return `Hello ${username}`;
  }, 1000);
}

const message = importantAction("Akash");
console.log(message);
console.log("stop");

// Output
// start
// undefined
// stop

// Callbacks

console.log("start");
function importantAction(username, cb) {
  setTimeout(() => {
    cb(`Hello ${username}`);
  }, 1000);
}
const message1 = importantAction("Akash", function (message1) {
  console.log(message1);
});
console.log("stop");

// Output
// start
// stop
// Hello Akash

// Callback Hell/ Pyramid of Doom

console.log("start");
function importantAction(username, cb) {
  setTimeout(() => {
    cb(`Hello ${username}`);
  }, 1000);
}

const message2 = importantAction("Akash", function (message) {
  console.log(message);
  importantAction("Akash 1", (action) => {
    console.log(action);
    shareTheVideo("Akash 2", (action) => {
      console.log(action);
      shareTheVideo("Akash 3", (action) => {
        console.log(action);
        shareTheVideo("Akash 4", (action) => {
          console.log(action);
        });
        shareTheVideo("Akash 5", (action) => {
          console.log(action);
        });
      });
    });
  });
});
console.log("stop");

// Output
// start
// stop
// Hello Akash
// Hello Akash 1
// Hello Akash 2
// Hello Akash 3
// Hello Akash 4
// Hello Akash 5

// Promises

console.log("start");

const sub = new Promise((resolve, reject) => {
  setTimeout(() => {
    const result = true;
    if (result) resolve("Hi Akash");
    else reject(new Error("Something went wrong"));
  }, 2000);
});

// console.log(sub); // Promise { <pending> }

sub
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

console.log("stop");

// Output
// start
// stop
// Hi Akash

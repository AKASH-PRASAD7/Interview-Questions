// Debouncing in JavaScript
// Debouncing in JavaScript is a practice used to improve browser performance.
// There might be some functionality in a web page which requires time-consuming computations.
// If such a method is invoked frequently, it might greatly affect the performance of the browser,
// as JavaScript is a single threaded language. Debouncing is a programming practice used to ensure
// that time-consuming tasks do not fire so often, that it stalls the performance of the web page.
// In other words, it limits the rate at which a function gets invoked.

// Ques 1 Create a button UI and add debounce as follows =>
// --> Show "Button Pressed <X> Times" every time button is pressed
// --> Increase "Triggered <Y> Times" count after 800ms of debounce

const btn = document.querySelector(".increment_btn");
const btnPress = document.querySelector(".increment_pressed");
const count = document.querySelector(".increment_count");

var pressedCount = 0;
var triggerCount = 0;

// From Lodash
const debouncedCount = _.debounce(() => {
  count.innerHTML = ++triggerCount;
}, 800);

btn.addEventListener("click", () => {
  btnPress.innerHTML;
  I = ++pressedCount;
  debouncedCount();
});

// Ques 2 Create a button UI and add throttle as follows =>
// --> Show "Button Pressed <X> Times" every time button is pressed
// --> Increase "Triggered <Y> Times" count after 800ms of throttle

const btn1 = document.querySelector(".increment_btn");
const btnPress1 = document.querySelector(".increment_pressed");
const count1 = document.querySelector(".increment_count");

var pressedCount = 0;
var triggerCount = 0;

// From Lodash
const throttledCount = _.throttle(() => {
  count.innerHTML = ++triggerCount;
}, 800);

btn.addEventListener("click", () => {
  btnPress.innerHTML;
  I = ++pressedCount;
  throttledCount();
});

// Polyfill for Debounce

const myDebounce = (cb, delay) => {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, delay);
  };
};

// Polyfill for Throttle

const myThrottle = (cb, delay) => {
  let flag = true;
  return function (...args) {
    if (flag) {
      cb(...args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, delay);
    }
  };
};

const myThrottle1 = (cb, delay) => {
  let last = 0;
  return (...args) => {
    let now = new Date().getTime();
    if (now - last < delay) return;
    last = now;
    return cb(...args);
  };
};

# Debouncing and Throttling in JavaScript

Improving browser performance is crucial to ensure a seamless user experience, especially when dealing with time-consuming computations. In JavaScript, _debouncing_ and _throttling_ are two effective techniques used to enhance performance by controlling the rate at which a function is executed. Let's dive into how to implement these strategies. 🚀

## What is Debouncing? 🤔

In JavaScript, debouncing is a practice that limits the rate at which a function can fire. This is particularly useful for events that occur frequently and require heavy computation or API calls. By debouncing a function, we ensure it only triggers after a certain amount of time has elapsed since the last time it was invoked, preventing unnecessary code execution and potential browser lag.

## Implementing Debounce with a Button Example

Consider a situation where you have a button on a webpage that, when clicked, performs a time-consuming action. Here's how you can debounce the action associated with the button:

```html
<button class="increment_btn">Click me!</button>
<p class="increment_pressed">
  Button Pressed <span id="pressed_count">0</span> Times
</p>
<p class="increment_count">
  Triggered <span id="trigger_count">0</span> Times After Debounce
</p>

<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.20/lodash.min.js"></script>
<script>
  const btn = document.querySelector(".increment_btn");
  const pressedDisplay = document.getElementById("pressed_count");
  const debounceDisplay = document.getElementById("trigger_count");

  let pressedCount = 0;
  let triggerCount = 0;

  // Using Lodash to debounce
  const debouncedUpdate = _.debounce(() => {
    debounceDisplay.textContent = ++triggerCount;
  }, 800);

  btn.addEventListener("click", () => {
    pressedDisplay.textContent = ++pressedCount;
    debouncedUpdate();
  });
</script>
```

In the code snippet above, we've created a UI button that connects to a debounced function, leveraging Lodash's `_.debounce()` method. The "Triggered" count updates only after 800ms, demonstrating the debounce effect.

## What is Throttling? 🚦

Throttling is similar to debouncing but with a slight difference. While debouncing waits for a pause in the event calls, throttling simply ensures that a function is not called more often than the specified rate. It comes in handy when you want to limit how many times a function can be executed over time.

## Implementing Throttle with a Button Example

Now let's see how throttling works using another button:

```html
<button class="throttle_btn">Click me!</button>
<p class="throttle_pressed">
  Button Pressed <span id="throttle_pressed_count">0</span> Times
</p>
<p class="throttle_count">
  Triggered <span id="throttle_trigger_count">0</span> Times With Throttle
</p>

<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.20/lodash.min.js"></script>
<script>
  const throttleBtn = document.querySelector(".throttle_btn");
  const throttlePressedDisplay = document.getElementById(
    "throttle_pressed_count"
  );
  const throttleDisplay = document.getElementById("throttle_trigger_count");

  let throttlePressedCount = 0;
  let throttleTriggerCount = 0;

  // Using Lodash to throttle
  const throttledUpdate = _.throttle(() => {
    throttleDisplay.textContent = ++throttleTriggerCount;
  }, 800);

  throttleBtn.addEventListener("click", () => {
    throttlePressedDisplay.textContent = ++throttlePressedCount;
    throttledUpdate();
  });
</script>
```

The "Triggered" counter in the throttled button example will increment less often than the debounced one, at most once every 800ms, no matter how many times the button is pressed.

## DIY Debounce and Throttle Polyfills 🛠️

Sometimes, you might not want to rely on external libraries like Lodash. Below are simple polyfills that you can use to recreate debounce and throttle functionality:

### Debounce Polyfill

```javascript
const myDebounce = (callback, delay) => {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};
```

### Throttle Polyfill (Option 1)

```javascript
const myThrottle = (callback, delay) => {
  let flag = true;
  return function (...args) {
    if (flag) {
      callback(...args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, delay);
    }
  };
};
```

### Throttle Polyfill (Option 2)

```javascript
const myThrottle1 = (callback, delay) => {
  let last = 0;
  return (...args) => {
    let now = new Date().getTime();
    if (now - last < delay) return;
    last = now;
    return cb(...args);
  };
};
```

## Conclusion

Debouncing and throttling are two useful techniques that can help improve the performance of your JavaScript applications. They are especially useful when dealing with time-consuming computations or API calls. I hope you found this article helpful. Thanks for reading! 🙏

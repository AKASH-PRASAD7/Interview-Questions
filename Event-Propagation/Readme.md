````markdown
# Event Propagation: Bubbling and Capturing 🛁📦

## What is Event Propagation? 🌐

Event propagation is the mechanism that defines the order in which elements receive the event when an event is fired on an element that is nested within another element. For example, if you have a `<p>` element inside a `<div>` element, and the user clicks on the `<p>` element, you might wonder which element's "click" event should be handled first.

There are two models of event propagation:

- **Bubbling**: In this model, the innermost element's event is handled first and then the outer elements.
- **Capturing (or Trickling)**: Contrarily, the outermost element's event is handled first and then the inner elements.

By default, the bubbling model is used if no specific event propagation model is specified. 🎈

### Event Bubbling Example 🗨️

```javascript
// Selecting elements
const div = document.querySelector("div");
const button = document.querySelector("button");
const form = document.querySelector("form");

// Adding click event listeners
div.addEventListener("click", function () {
  alert("div");
});
button.addEventListener("click", function () {
  alert("button");
});
form.addEventListener("click", function () {
  alert("form");
});

// Clicking the button would trigger alerts in this order: button, form, div
```
````

When you click the button, the alerts pop up in the following sequence: button -> form -> div.

### Event Target vs. CurrentTarget vs. This 🎯

- **event.target**: Refers to the element on which the event originally occurred.
- **event.currentTarget**: Refers to the element that the event listener is currently processing.
- **this** (or `this.target` in some contexts): Typically refers to the same object as `event.currentTarget` within event listener functions.

### Event Capturing Example 🎣

```javascript
// Selecting elements with capturing specified
div1.addEventListener(
  "click",
  function () {
    alert("div");
  },
  { capture: true }
);
button1.addEventListener(
  "click",
  function () {
    alert("button");
  },
  { capture: true }
);
form1.addEventListener(
  "click",
  function () {
    alert("form");
  },
  { capture: true }
);

// Clicking the button would trigger alerts in this order: div, form, button
```

During event capturing, assuming that each listener is set with `capture: true`, the div's alert will appear first, followed by the form's and finally the button's alert.

### Stop Propagation: Halting the Bubbles! ⚠️

```javascript
// Adding event listeners with stopPropagation
div2.addEventListener("click", function (e) {
  alert("div");
  e.stopPropagation();
});
button2.addEventListener("click", function (e) {
  alert("button");
  e.stopPropagation();
});
form2.addEventListener("click", function (e) {
  alert("form");
  e.stopPropagation();
});

// Clicking the button would trigger only the button's alert
```

Using `e.stopPropagation()`, you can prevent the event from bubbling up or capturing down the DOM tree, hence, only the handler for the button will be executed.

## Event Delegation: A Smart Way to Handle Events 🤹

Event delegation involves attaching a single event listener to a parent element rather than each descendant. This technique leverages event bubbling to handle events at a higher level in the DOM than where they were initiated.

### Example: List Item Selection 📝

```javascript
// Select the list container
const list = document.querySelector("ul");

// Add event listener for list item selection
list.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("selected");
  }
});
```

### Closing a Modal from the Outside: A Common UI Pattern 🚪❌

```javascript
// Modal interactions
const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const span = document.querySelector(".close");

btn.addEventListener("click", function () {
  modal.style.display = "block";
});
span.addEventListener("click", function () {
  modal.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
```

This snippet demonstrates a pattern where a modal window will close when the user clicks outside of it, another application of event management.

---

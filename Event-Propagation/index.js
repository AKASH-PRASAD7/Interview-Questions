// Event Propagation (Bubbling and Capturing)
// What is Event Propagation?
// Event propagation is a way of defining the element order when an event occurs.
//  If you have a <p> element inside a <div> element, and the user clicks on the <p> element,
// which element's "click" event should be handled first?

// In bubbling the inner most element's event is handled first and then the outer:
// In capturing the outer most element's event is handled first and then the inner:
// Bubbling and capturing are two ways of event propagation in the HTML DOM API,
//  when an event occurs in an element inside another element, and both elements have registered a handle for that event.
//  The event propagation mode determines in which order the elements receive the event.
// With bubbling, the event is first captured and handled by the innermost element and then propagated to outer elements.
//  With capturing, the event is first captured by the outermost element and propagated to the inner elements.
// Bubbling is default: If you do not specify the propagation mode for an event, the bubbling is default.

// Event Bubbling

const div = document.querySelector("div");
const form = document.querySelector("form");
const button = document.querySelector("button");

div.addEventListener("click", function () {
  alert("div");
});
button.addEventListener("click", function () {
  alert("button");
});
form.addEventListener("click", function () {
  alert("form");
});

// When button is clicked :
// button
// form
// div

// event.target vs event.currentTarget vs this.target

// event.target
// The target property of the Event interface is a reference to the object onto which the event was dispatched.
// It is different from Event.currentTarget when the event handler is called during the bubbling or capturing phase of the event.

// event.currentTarget
// The currentTarget read-only property of the Event interface identifies the current target for the event,
// as the event traverses the DOM. It always refers to the element to which the event handler has been attached,

// this.target
// this is a reference to the object that dispatched the event.
// It is different from Event.currentTarget when the event handler is called during the bubbling or capturing phase of the event.

// What is Event Capturing/Trickling?

const div1 = document.querySelector("div");
const form1 = document.querySelector("form");
const button1 = document.querySelector("button");

div.addEventListener(
  "click",
  function () {
    alert("div");
  },
  {
    capture: true,
  }
);

button.addEventListener(
  "click",
  function () {
    alert("button");
  },
  {
    capture: true,
  }
);
form.addEventListener(
  "click",
  function () {
    alert("form");
  },
  {
    capture: true,
  }
);

// When button is clicked :
// div
// form
// button

// What is Stop Propagation/ Stop Bubbling?

const div2 = document.querySelector("div");
const form2 = document.querySelector("form");
const button2 = document.querySelector("button");

div.addEventListener("click", function (e) {
  alert("div");
  e.stopPropagation();
});
button.addEventListener("click", function (e) {
  alert("button");
  e.stopPropagation();
});
form.addEventListener("click", function (e) {
  alert("form");
  e.stopPropagation();
});

// When button is clicked :
// button

// What is Event Delegation?

// Event delegation is a technique involving adding event listeners to a parent element
// instead of adding them to the descendant elements.
// The listener will fire whenever the event is triggered on the descendant elements
// due to event bubbling up the DOM. The benefits of this technique are:

// Memory footprint goes down because only one single handler is needed on the parent element,
// rather than having to attach event handlers on each descendant.
// There is no need to unbind the handler from elements that are removed and to bind the event for new elements.

// Create a list of items
const list = document.querySelector("ul");
// Add a click event listener to it

list.addEventListener("click", function (e) {
  // Check if a list item was clicked
  if (e.target.tagName === "LI") {
    // If so, toggle the selected styling on it
    e.target.classList.toggle("selected");
  }
});

// Create a modal which closes when clicked outside of it

// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
const span = modal.querySelector(".close");

// When the user clicks the button, open the modal
btn.addEventListener("click", function () {
  modal.style.display = "block";
});

// When the user clicks on <span> (x), close the modal
span.addEventListener("click", function () {
  modal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

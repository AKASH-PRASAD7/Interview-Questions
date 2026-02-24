## What is the purpose of the race method in promise?

**Ans:-** Promise.race() method will return the promise instance which is firstly resolved or rejected. Let's take an example of race() method where promise2 is resolved first.


**Example Code**

---

```javascript
var promise1 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 500, "one");
});
var promise2 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 100, "two");
});

Promise.race([promise1, promise2]).then(function (value) {
  console.log(value); // In this example, both promises are getting resolved but the second one is resolving faster than the first one. So, the output will be "two".
});
```
---

**Real World Analogy**

- Ordering food from two delivery apps: 
You place the same order on Swiggy and Zomato. Whichever delivers first, you eat that one

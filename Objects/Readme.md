# JavaScript Object Fundamentals :book:

Understanding objects in JavaScript is fundamental as they play a critical role in various aspects of development. Here's a rundown to help you get to grips with them.

### Creating and Accessing Object Properties :key:

```javascript
const person = {
  name: "John",
  age: 20,
  "Is gender Male": true,
};

// Accessing with Dot Notation
console.log(person.name); // Output: John

// Accessing with Bracket Notation
console.log(person["name"]); // Output: John
console.log(person["Is gender Male"]); // Output: true
```

Dynamic property names are pretty handy:

```javascript
// Dynamic Property Access
const selection = "name";
console.log(person[selection]); // Output: John
```

### Adding and Deleting Properties :new:

```javascript
// Adding a New Property
person.location = "Australia";
console.log(person.location); // Output: Australia

// Deleting a Property
delete person.location;
console.log(person.location); // Output: undefined
```

### Mysterious Behaviors :mag:

Here's a peculiar JavaScript behavior:

```javascript
// A puzzling function
const func = (function (a) {
  delete a;
  return a;
})(5);
console.log(func); // Output: 5
```

### Dealing with Duplicate and Dynamic Properties :twisted_rightwards_arrows:

```javascript
// Object with Duplicate Keys
const obj = {
  a: "one",
  b: "two",
  a: "three",
};
console.log(obj); // Output: {a: "three", b: "two"}
```

Creating objects with dynamic keys is quite slick:

```javascript
// Dynamic Properties
const property = "firstname";
const name = "Akash";

const person = {
  [property]: name,
};
```

### Looping Through Objects :arrows_counterclockwise:

```javascript
// Looping through an object
for (let key in person) {
  console.log(key, person[key]);
}
```

### Multiplying Numeric Properties by Two :two:

```javascript
// Function to Multiply Numeric Properties by Two
const multiplyNumeric = (obj) => {
  for (let key in obj) {
    if (!isNaN(obj[key])) {
      obj[key] *= 2;
    }
  }
};

// Usage
let nums = {
  a: 100,
  b: 200,
  title: "My nums",
};
multiplyNumeric(nums);
```

### Analyzing the Outputs :bulb:

Understanding the outcomes of various code snippets:

- **Snippet 1:**

  ```javascript
  console.log([..."Lydia"]); // Output: ["L", "y", "d", "i", "a"]
  ```

- **Snippet 2:**

  ```javascript
  const settings = {
    username: "Akash",
    level: 19,
    health: 90,
  };

  const data = JSON.stringify(settings, ["level", "health"]);
  console.log(data); // Output: {"level":19,"health":90}
  ```

- **Snippet 3:**

  ```javascript
  const shape = {
    radius: 10,
    diameter() {
      return this.radius * 2;
    },

    perimeter: () => 2 * Math.PI * this.radius,
  };

  console.log(shape.diameter()); // Output: 20
  console.log(shape.perimeter()); // Output: NaN
  ```

  _(Arrow functions don't have their own `this` binding)_

- **Snippet 4:**

  ```javascript
  const { name1: myName } = user;
  console.log(myName); // Output: Akash;

  const {
    fullname: { first },
  } = user;
  console.log(first); // Output: John
  ```

### Understanding Copy Mechanisms in JavaScript :clipboard:

- **Shallow Copy**: Copies values at the first level, still references the same nested objects/arrays.
- **Deep Copy**: Copies all levels, resulting in a completely separate object.

### Techniques to Clone Objects :sheep:

1. **Using JSON methods (quick but with limitations, like ignoring functions and `undefined` values):**

   ```javascript
   const clone = JSON.parse(JSON.stringify(person));
   console.log(clone); // Output: {name: "Akash", age: 23, hobbies: Array(2)}
   ```

2. **Using `Object.assign()` for a shallow copy:**

   ```javascript
   const clone1 = Object.assign({}, person);
   ```

3. **Using the spread operator for a shallow copy:**

   ```javascript
   const clone2 = { ...person };
   ```

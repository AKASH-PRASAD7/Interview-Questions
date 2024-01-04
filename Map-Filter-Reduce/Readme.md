## Map, Filter, Reduce in JavaScript 🚀

### 1. What is `map()`?

The `map()` method transforms each element of an array using a provided function.

```javascript
const arr = [1, 2, 3, 4, 5];
const multiplyByTwo = arr.map((num) => num * 2);
console.log(multiplyByTwo); // [2, 4, 6, 8, 10]
```

### 2. What is `filter()`?

The `filter()` method creates a new array with elements that pass a provided test.

```javascript
const arr1 = [1, 2, 3, 4, 5];
const greaterThanTwo = arr1.filter((num) => num > 2);
console.log(greaterThanTwo); // [3, 4, 5]
```

### 3. What is `reduce()`?

The `reduce()` method executes a reducer function on each array element, producing a single output value.

```javascript
const arr2 = [1, 2, 3, 4, 5];
const sum = arr2.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log(sum); // 15
```

### 4. Differences between `map()`, `filter()`, and `reduce()`?

- `map()` transforms values.
- `filter()` removes unwanted values.
- `reduce()` finds the sum or transforms the array into another data structure.

### 5. Difference between `map()` and `forEach()`?

- `map()` creates a new array based on the provided function.
- `forEach()` executes a function for each array element without creating a new array.

### 6-8. Polyfills for `map()`, `filter()`, and `reduce()`

```javascript
Array.prototype.myMap = function (callback) {
  /* ... */
};
Array.prototype.myFilter = function (callback) {
  /* ... */
};
Array.prototype.myReduce = function (callback, initialValue) {
  /* ... */
};
```

### Output Question 1

Calculate the total marks of students, adding 20 marks to those with scores below 60.

```javascript
const totalMarks = students
  .map((student) => {
    if (student.marks < 60) {
      student.marks += 20;
    }
    return student;
  })
  .filter((student) => student.marks > 60)
  .reduce((total, student) => total + student.marks, 0);

console.log(totalMarks); // 160
```

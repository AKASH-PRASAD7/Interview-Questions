// MAP FILTER REDUCE
// 1. What is map()?
/* 
    Definition: The map() method creates a new array with the results of calling 
    a provided function on every element in the calling array. 
    
    Syntax: arr.map(callback(currentValue[, index[, array]])[, thisArg])

    Arguments: callback: Function that is called for every element of arr.

    Map, filter and Reduce allows chaining, which is a way of writing shorter code for the same thing.  

*/

const arr = [1, 2, 3, 4, 5];

const multiplyByTwo = arr.map((num) => {
  return num * 2;
});
console.log(multiplyByTwo); // [2, 4, 6, 8, 10]

// 2. What is filter()?
/* 
    Definition: The filter() method creates a new array with all elements that 
    pass the test implemented by the provided function.

    Syntax: arr.filter(callback(element[, index[, array]])[, thisArg])

    Arguments: callback: Function is a predicate, to test each element of the array. 
    Return a value that coerces to true to keep the element, or to false otherwise.
*/

const arr1 = [1, 2, 3, 4, 5];

const greaterThanTwo = arr1.filter((num) => {
  return num > 2;
});
console.log(greaterThanTwo); // [3, 4, 5]

// 3. What is reduce()?

/*

    Definition: The reduce() method executes a reducer function (that you provide)
    on each element of the array, resulting in single output value.

    Syntax: arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])

    Arguments: callback: Function to execute on each element in the array,
    taking four arguments:
    accumulator: The accumulator accumulates the callback's return values;
    it is the accumulated value previously returned in the last invocation
    of the callback, or initialValue, if supplied (see below).
    currentValue: The current element being processed in the array.
    index(Optional): The index of the current element being processed in the array. 
    Starts from index 0 if an initialValue is provided. Otherwise, it starts from index 1.
    array(Optional): The array reduce() was called upon.
*/

const arr2 = [1, 2, 3, 4, 5];

const sum = arr2.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});
console.log(sum); // 15

// 4. What is the difference between map(), filter() and reduce()?

/*
    
        Map() is used to transform an array’s values, while filter() is used to remove unwanted values from it. 
        reduce() can be used to find the sum of all values in an array, and to transform an array into another data structure.
 */

// 5. What is the difference between map() and forEach()?

/*

    The forEach() method executes a provided function once for each array element.
    The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

*/

// 6. Ployfill for map()

Array.prototype.myMap = function (callback) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(callback(this[i]));
  }
  return arr;
};

// 7. Ployfill for filter()

Array.prototype.myFilter = function (callback) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      arr.push(this[i]);
    }
  }
  return arr;
};

// 8. Ployfill for reduce()

Array.prototype.myReduce = function (callback, initialValue) {
  let accumulator = initialValue || this[0];
  for (let i = 0; i < this.length; i++) {
    accumulator = callback(accumulator, this[i]);
  }
  return accumulator;
};

// Output Questions 1
/* 
    Return total marks of students with marks greater than 60 after 20 marks
    are added to those who scored less than 60.
*/

const students = [
  { name: "John", marks: 50 },
  { name: "Sam", marks: 60 },
  { name: "John", marks: 70 },
  { name: "Sam", marks: 35 },
];

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

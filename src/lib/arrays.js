// This is a simple JavaScript code snippet that demonstrates
// different array methods and properties.

// Find length of array
//const numbers = [1, 2, 3, 4, 5];
//console.log(numbers.length);

// Add an element to the end of the array
//numbers.push(6);
//console.log(numbers.length);
//console.log(numbers);

// Checks array for a specific value
//console.log(numbers.includes(6)); // true
//console.log(numbers.includes(7)); // false

// ForEach Loop. If you want to do something to each
// element in the array, you define a new function/arrow
// function and do something to each element in the array
//numbers.forEach((number) => {
//  console.log(number * 2);
//});

// Map. If you want to create a new array based on the
// original array, you can use the map method. It basically
// is like a forEach loop. You must return your values
// though.
//const newNumbers = numbers.map((number) => {
//  return number * 5;
//});

//console.log(newNumbers);

// .some. Checks if at least one element in the array
// satisfies the condition. Returns true or false.
//const condExists = numbers.some((number) => {
//  return number > 5;
//});
//console.log(condExists); // false

// .find. Returns the first element in the array that
// satisfies the condition. If no element satisfies
// the condition, it returns undefined.

// .filter. Returns a new array with all elements
// that satisfy the condition.
//const newNumbers = numbers.filter((number) => {
//  return number > 2;
//});
//
//console.log(newNumbers); // [3, 4, 5]

// spread. Combines two arrays into one.
const numbers = [1, 3, 5, 7];
const numbers2 = [2, 4, 6, 8];

const combinedArray = [...numbers, ...numbers2];
console.log(combinedArray);

const arr1 = [ 1, 2, 5, 100, 21 ];
const arr2 = [ 'Ali', 'Max', 'Johnson', 'Alex', 'John', 'bob', 'alice' ];

const arr3 = arr2.sort();

console.log(arr3); // [ 'Alex', 'Ali', 'John', 'Johnson', 'Max', 'alice', 'bob']
console.log(arr2); // [ 'Alex', 'Ali', 'John', 'Johnson', 'Max', 'alice', 'bob']

arr1.sort();
console.log(arr1); // [ 1, 100, 2, 21, 5 ]

// We want to get [ 1, 2, 5, 21, 100 ]
const numbers = [ 1, 2, 5, 100, 21 ];
numbers.sort((a, b) => b - a);

console.log(numbers); // [ 1, 2, 5, 21, 100 ]
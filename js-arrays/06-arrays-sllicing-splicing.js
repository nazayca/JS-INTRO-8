// slice() method
const arr1 = [100, 200, 500, 300, 400];

console.log(arr1.slice(0, 2)); // [ 100, 200 ]
console.log(arr1.slice(1, 4)); // [ 200, 500, 300 ]
console.log(arr1.slice(2)); // [ 500, 300, 400 ]

console.log(arr1.slice(-4)); // [ 200, 500, 300, 400 ]
console.log(arr1.slice(-3, -2)); // [ 500 ]
console.log(arr1.slice(-1, -3)); // []


// splice() method
const fruits = ['Kiwi', 'Apple'];

fruits.splice(1, 0, 'Orange');

console.log(fruits); // [ 'Kiwi', 'Orange', 'Apple' ]

// Add 'Cherry', 'Banana' and 'Pineapple' between 'Orange' and 'Apple'
fruits.splice(2, 0, 'Cherry', 'Banana', 'Pineapple');

console.log(fruits); // [ 'Kiwi', 'Orange', 'Cherry', 'Banana', 'Pineapple', 'Apple' ]

// Remove 'Banana' and 'Pineapple'
fruits.splice(3, 2);
console.log(fruits); // [ 'Kiwi', 'Orange', 'Cherry', 'Apple' ]

// Replace 'Cherry' with 'Watermelon' and 'Grapes' 
fruits.splice(2, 1, 'Watermelon', 'Grapes');
console.log(fruits); // [ 'Kiwi', 'Orange', 'Watermelon', 'Grapes', 'Apple' ]

// Remove 'Orange' and 'Grapes'
// fruits.splice(1, 3, 'Watermelon');

fruits.splice(1, 1); // [ 'Kiwi', 'Watermelon', 'Grapes', 'Apple' ]
fruits.splice(2, 1); // [ 'Kiwi', 'Watermelon', 'Apple' ]
console.log(fruits); // [ 'Kiwi', 'Watermelon', 'Apple' ]
const numbers = [0, 10, -4, 5,2,-3];

// Find first positive number -> 10
// Find first negative number -> -4
// Find first even number -> 0
// Find first odd number -> 5
console.log(numbers.find(number => number > 0)); // 10
console.log(numbers.findIndex(number => number > 0)); // 1

console.log(numbers.find(number => number < 0))
console.log(numbers.findIndex(number => number < 0))

console.log(numbers.find(number=>number % 2 ===0))
console.log(numbers.findIndex(number=>number % 2 ===0))

console.log(numbers.find(number=>number % 2 !==0))
console.log(numbers.findIndex(number=>number % 2 !==0))

console.log(numbers.find(number => number === 500)); // undefined
console.log(numbers.findIndex(number => number === 500)); // -1

const names = ['Alex', 'John'];

// Add another element to the tail of the array -> end
names.push('Max');

console.log(names); // [ 'Alex', 'John', 'Max' ]

// Remove an element from the tail of the array
names.pop();

console.log(names); // [ 'Alex', 'John' ]

names.push('Max', 'Jessie', 'Adam');

console.log(names); // [ 'Alex', 'John', 'Max', 'Jessie', 'Adam' ]

// Do these methods change the original array? YES, it modifies the original array

let resultOfPush = names.push('Mark'); //

let resultOfPop = names.pop();

console.log(resultOfPush); // 6
console.log(resultOfPop); // Mark


// shift() method vs unshift() method for adding and removing elements to/from the beginning of the array
const numbers = [10, 13, 17, 5, 2];

let resultOfUnshift = numbers.unshift(100);

console.log(numbers); // [ 100, 10, 13, 17, 5, 2 ]

console.log(resultOfUnshift); // 6

let resultOfShift = numbers.shift();
console.log(numbers); // [ 10, 13, 17, 5, 2 ]
console.log(resultOfShift); // 100

numbers.unshift(200, 300, 400, 500);
console.log(numbers);
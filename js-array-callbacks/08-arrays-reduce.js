const numbers = [5, 10, 100];
 
// sum of the numbers                   -> 115
console.log(numbers.reduce((total, curr) => curr + total, 0))

// count the numbers divisible by 10    -> 2
// count the even numbers               -> 2
console.log(numbers.reduce((total, curr) => curr % 10 === 0 ? total + 1 : total, 0))
console.log(numbers.reduce((counteven, curr) => curr % 2 === 0 ? counteven + 1 : counteven, 0))

// find the max number                  -> 100
// find the min number                  -> 5
console.log(numbers.reduce((max, curr) => Math.max(max, curr), -Infinity))
console.log(numbers.reduce((min, curr) => Math.min(min, curr), Infinity))



const fruits = ['Apple', 'Orange', 'Kiwi', 'Pineapple', 'Mango', 'Melon'];


//// count how many elements has 'apple' ignoring cases   -> 2
// count how many elements has 'i' ignoring cases       -> 2
// count how many elements ends with 'e'                -> 3


// TODO we will solve this on Saturday morning ;)
console.log(fruits.reduce((count, fruit) => fruit.toLowerCase().includes("apple") ? count + 1 : count, 0))

console.log(fruits.reduce((total, curr) => curr.includes('i') ? total + 1 : total, 0))

console.log(fruits.reduce((count, fruit) => fruit.endsWith('e') ? count + 1 : count, 0))
 

console.log(fruits.filter((fruit) => fruit.trim(' ').toLowerCase().includes('apple')).length)
console.log(fruits.filter((fruit) => fruit.trim().toLowerCase().includes('i')).length)
console.log(fruits.filter((fruit) => fruit.trim().toLowerCase().endsWith('e')).length)

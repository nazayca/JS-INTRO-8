const numbers = [2, 5, 10, 7, 8, 1, 0];
//using map= should have the same size with the new arr
const numbersMultiplyBy3 = numbers.map(number => number * 3)
console.log(numbersMultiplyBy3)

const numbersEvenOrOdd = numbers.map(number => number % 2 === 0)
console.log(numbersEvenOrOdd)

// filter return the partial element matching specific condition
const evenNumbers = numbers.filter(number => number % 2 === 0)
console.log(evenNumbers)

const oddNumbers = numbers.filter(number => number % 2 !== 0)
console.log(oddNumbers)

const positiveNumbers = numbers.filter(number => number > 0)
console.log(positiveNumbers)

// reduce --> visits each element in an array and returns a single result

const biggestNumber = numbers.reduce((acc, curr) => Math.max(acc, curr),0)
console.log(biggestNumber)

const sum = numbers.reduce((total, current) => total += current, 0);
console.log(sum)

const countEven = numbers.reduce((counter, curr) => {
    if (curr % 2 === 0) return counter + 1;
    else return counter;
}, 0);
console.log(countEven)
const countEven2 = numbers.reduce((counter, curr) => curr % 2 === 0 ? counter + 1 : counter, 0);
console.log(countEven2)
// const countEven = numbers.reduce((curr, counter) => {
//     if(curr % 2 === 0) return counter + 1;
//     else return counter;
// }, 0);

// console.log(countEven);

/*

map         -> you return a new array having the same size with the original array but elements are replaced
filter      -> you return partial array and the elements within that array matching a specific condition
reduce      -> visits each element in an array and returns a single result

Counting elements
    count evens                     -> 4
    count odds                      -> 3
    count number divisible by 3     -> 1
    count number divisible by 4     -> 2
    count number divisible by 5     -> 3
    count positive numbers          -> 6

Finding speficic element
    find the greatest number        -> 10
    find the smallest number        -> 0


Accumulate elements
    find sum of numbers             -> 33
    find product of numbers         -> 0
    find average of the numbers     -> 4.714285714285714

Filtering and grouping elements
    even numbers                    -> [2, 10, 8, 0]   
    odd numbers                     -> [5, 7, 1] 
    positive numbers                -> [ 2, 5, 10, 7, 8, 1 ]


Change all the elements
    multiply each element by 3      -> [ 6, 15, 30, 21, 24, 3, 0 ]
    true for even, false for odd    -> [ true, false, true, false, true, false, true ]
*/




/*
Assume you are given an array that stores numbers
Count how many positive numbers you have in the below array     -> 4
Count how many even numbers you have in the below array         -> 7
Count how many numbers can be divided by 5 in the below array   -> 7
*/

const numbers = [-7, -2, 0, -2, 0, 5, 5, 10, 100, 0];

console.log('\n-----------Counting Positive Numbers-------------\n');
let countPos = 0;

for(const number of numbers) {
   if(number > 0) countPos++;
}

console.log(countPos);


console.log('\n-----------Counting Even Numbers-------------\n');
let countEven = 0;

for(const number of numbers) {
    if(number % 2 === 0) countEven++;
}

console.log(countEven);

console.log('\n-----------Counting Numbers Divisible by 5-------------\n');
let countDivisible5 = 0;

for(const num of numbers) {
    if(num % 5 === 0) countDivisible5++;
}

console.log(countDivisible5);
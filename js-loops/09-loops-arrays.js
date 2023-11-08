/*
Assume you are given an array that stores numbers
Find the sum of all numbers         -> 28
Find the average of the numbers     -> 4
Find the sum of numbers that has even index -> 3+7+2+7  -> 19
*/

const numbers = [3, 4, 7, 3, 2, 2, 7];

console.log('\n-----------Sum and Average-------------\n');

let sum = 0;

for(const num of numbers) {
    sum += num;
}

console.log('Sum: ', sum);
console.log('Average: ', sum / numbers.length);


console.log('\n-----------Sum of Even Indexes-------------\n');

let sumOfEvenIndex = 0;

for(let i = 0; i <= numbers.length-1; i++) {
    if(i % 2 === 0) sumOfEvenIndex += numbers[i]; 
}

console.log(sumOfEvenIndex);



const nums = [3, 4, 7, 3, 2]; 

// Find the multiplication of all numbers         -> 504
// Find the multiplication of numbers that has odd index -> 4*3 -> 12

console.log('\n-----------Multiplication of Numbers-------------\n');

let product = 1;

for(const num of nums) {
    product *= num; 
}

console.log('Product: ', product);


console.log('\n-----------Multiplication of Odd Indexes-------------\n');

let productOfOddIndex = 1;

for(let i = 0; i < nums.length; i++) {
    if(i % 2 !== 0) productOfOddIndex *= nums[i];
}

console.log(productOfOddIndex);
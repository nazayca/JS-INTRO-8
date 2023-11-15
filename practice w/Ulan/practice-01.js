// Formula to get random number between two numbers (inclusive): Math.random() * (max - min + 1) + min;

/*
    Question 1:

    Requirement:
    Write a program that generates a random number integer between 0 and 50 (both 0 and 50 are included)

    Multiply number with 5 and print the result with below message

    Expected result:
    The random number * 5 = {result}
*/

/*
    Pseudo Code:

    1. Find random number between 0 and 50 (both inclusive)
    2. Multiply that random number with 5
    3. Log the result
*/

// Solution for Question 1:
let max = 50;
let min = 0;
// const randomNumber = Math.floor(Math.random() * (max - min + 1) + min); // 0 <= number < 1 (floating numbers as well) 0.4, 0.0001
const randomNumber = Math.floor(Math.random() * 51);
console.log("randomNumber", randomNumber);
const result = randomNumber * 5;
console.log("Random number between (0 and 50) * 5 = ", result); // integer value

/*
    Question 2:

    Requirement:
    
    Write a program that generates a random number between 50 and 100 (both 50 and 100 are included)

    Find the remainder of the number by 10

    Expected result:
    The random number % 10 = {result}
*/

/*
    Pseudo Code:

    1. Find random number between 50 and 100 (both inclusive)
    2. Find the remainder of that random number by 10
    3. Log the result
*/

// Solution for Quesiton 2
const randomNumber2 = Math.floor(Math.random() * (100 - 50 + 1) + 50); // int value
console.log("randomNumber2", randomNumber2);
const remainder = randomNumber2 % 10;
console.log("Remainder of random number by 10 = ", remainder);


/*
    Question 3:

    Requirement:
    Write a program that generates 4 random numbers as below;
    1st  number to be between 1 and 25 (both included) -> min
    2nd number to be between 26 and 50 (both included)
    3rd number to be between 51 and 75 (both included)
    4th number to be between 76 and 100 (both included) -> max

    Find the absolute difference between the max and min number
    Find the absolute difference between the second and third number
    Find the average of all 4 numbers

    Expected result:
    Difference of max and min = {result}
    Difference of second and third = {result}
    Average of all = {average}
*/

/*
    Pseudo Code:

    1. Find 4 random numbers
    2. Find abs difference between max and min
    3. Find abs difference between 2nd and 3rd
    4. Find average of all 4
*/

// Solution for Question 3

const rdmNum = Math.floor(Math.random() * (25 - 1 + 1) + 1); // min
const rdmNum2 = Math.floor(Math.random() * (50 - 26 + 1) + 26);
const rdmNum3 = Math.floor(Math.random() * (75 - 51 + 1) + 51);
const rdmNum4 = Math.floor(Math.random() * (100 - 76 + 1) + 76); // max

// Assuming you know that rdmNum4 is always bigger than rdmNum

const absDiff1 = rdmNum4 - rdmNum; // ?
const absDiff2 = rdmNum3 - rdmNum2; // ?
const averageOfFour = (rdmNum + rdmNum2 + rdmNum3 + rdmNum4) / 4; // ?

console.log(absDiff1);
console.log(absDiff2);
console.log(averageOfFour);

// If you don't know
const maxNum = Math.max(rdmNum, rdmNum2, rdmNum3, rdmNum4); 
const minNum = Math.min(rdmNum, rdmNum2, rdmNum3, rdmNum4); 
const absDiff3 = Math.abs(maxNum - minNum); 
// const absDiff3 = Math.abs(minNum - maxNum);  // same as above line
const absDiff4 = Math.abs(rdmNum3 - rdmNum2); 
// const absDiff4 = Math.abs(rdmNum2 - rdmNum3);  // same as above line
/*
task-01

Write a function named findMedian() which takes two arrays of numbers as 
its arguments and return the median of the two sorted arrays. 
NOTE: The median is the middle number of a sorted array. So the median of 
[1,3], [2] would be 2. If the array has an even length, you are to find the average 
of the 2 middle numbers


*/

const findMedian = (arr1, arr2) => {
    const concatenatedArr = [...arr1, ...arr2]
    const sortedArr = concatenatedArr.sort((a,b) => a-b)
   
    const mid = Math.floor(sortedArr.length / 2);

    return sortedArr.length % 2 === 0
        ? (sortedArr[mid - 1] + sortedArr[mid]) / 2
        : sortedArr[mid];


}
console.log(findMedian([1, 3], [2]));       //  2
console.log(findMedian([1, 2], [3, 4]));    //  2.5
console.log(findMedian([4], [3]));          //  3.5
console.log(findMedian([4], []));           //  4
console.log(findMedian([0], [0, 1]));       //  0

/*
Task-02
Write a function named calculateFactorial() which takes a number as an 
argument and returns the factorial of that number.
Note: Factorial is the product of all positive integers less than or equal to a 
given positive integer and denoted by that integer and an exclamation point. 
Thus, factorial seven is written 7!, meaning 1 × 2 × 3 × 4 × 5 × 6 × 7. Factorial 
zero is defined as equal to 1.

*/

const calculateFactorial = (num) => {
    if (num === 0 || num  === 1) return 1

    let fac = 1;
    for(let i = 2; i <= num; i++) {
        fac *= i
    }
    return fac
}

console.log(calculateFactorial(0));   //  1
console.log(calculateFactorial(1));   //  1
console.log(calculateFactorial(5));   //  120
console.log(calculateFactorial(6));   //  720
console.log(calculateFactorial(10));  //  3628800
console.log(calculateFactorial(4));   //  24

/*
Task-03
Write a function named calculateGCD() which takes two numbers as 
arguments and returns the greatest common divisor of the two numbers.
NOTE: GCD is a mathematical concept used to describe the largest number that 
divides two or more integers without leaving a remainder. In other words, it is 
the largest number that is a common factor of two or more numbers.

*/

// const calculateGCD = (num1, num2) => {
//     if(num2 === 0) return num1
//     return calculateGCD(num2, num1 % num2)
// }

const calculateGCD =(a, b) => {
    while(b !==0){
        const temp = b
        b = a % b
        a = temp
    }
     return a
}

console.log(calculateGCD(8, 12));   //  4
console.log(calculateGCD(17, 5));   //  1
console.log(calculateGCD(48, 18));  //  6
console.log(calculateGCD(0, 5));    //  5
console.log(calculateGCD(21, 14));  //  7
console.log(calculateGCD(60, 48));  //  12

/*
Task-4
Write a function named calculateLCM() which takes two numbers as 
arguments and returns the least common multiple of the two numbers.
NOTE: LCM is a mathematical concept used to describe the largest number that 
divides two or more integers without leaving a remainder. In other words, it is 
the largest number that is a common factor of two or more numbers.

*/

const calculateLCM = (a,b) => {
 
    
}

console.log(calculateLCM(8, 12));   // Output: 24
console.log(calculateLCM(17, 5));   // Output: 85
console.log(calculateLCM(48, 18));  // Output: 144
console.log(calculateLCM(0, 5));    // Output: 0
console.log(calculateLCM(21, 14));  // Output: 42
console.log(calculateLCM(60, 48));  // Output: 240

//i know how to find LCM and GCD in real life :)) but couldtn figure out how to get LCM in js

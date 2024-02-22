/* 
TASK-01
Write a function named repeatingX() which takes a string argument and 
returns true if the letter x is followed by another x. Otherwise, return false.
NOTE This method should be case-insensitive.

*/


function repeatingX(Str) {
   
    for (let i = 0; i < Str.length - 1; i++) {
       
        if ((Str[i].toLowerCase() === 'x' || Str[i].toUpperCase() === 'X') &&
            (Str[i + 1].toLowerCase() === 'x' || Str[i + 1].toUpperCase() === 'X')) {
            return true;
        }
    }

  
    return false;
}


console.log(repeatingX("xTechxGlobalx"));  //  false
console.log(repeatingX("Hello Xx World"));  //  true
console.log(repeatingX("x x"));  //  false
console.log(repeatingX(""));  //  false
console.log(repeatingX("xxxxx"));  //  true

/*
Task-02
Write a function named isPerfectSquare() which takes a number as an 
argument and checks if it is a perfect square. It returns true if the number is a 
perfect square and false otherwise.
NOTE: A perfect square is a number that can be expressed as the product of an 
integer by itself or as the second exponent of an integer. For example, 25 is a 
perfect square because it is the product of integer 5 by itself, 5 × 5 = 25. 
However, 21 is not a perfect square number because it cannot be expressed as 
the product of two same integers.

*/

const isPerfectSquare = (num) => {
    if (num < 0 ) return false

    const root = Math.sqrt(num)
    return root === Math.floor(root)

}


console.log(isPerfectSquare(25));   // : true
console.log(isPerfectSquare(24));   // : false
console.log(isPerfectSquare(0));    // : true
console.log(isPerfectSquare(1));    // : true
console.log(isPerfectSquare(-1));   // : false
console.log(isPerfectSquare(144));  // : true

/*
Task-03

Write a function named convertTemperature() which takes a number and a 
string arguments to be considered as a temperature value and a unit (either 
Celsius or Fahrenheit) as arguments and converts the temperature to the other 
unit.
NOTE: Use below formulas to convert temperature:
Celsius to Fahrenheit: temp * 9/5) + 32
Fahrenheit to Celsius: temp - 32) * 5/9

*/

const convertTemperature = (num, str) => {
    if(str.toLowerCase() === 'celsius') 
        return (num * 9/5)+32
     if (str.toLowerCase()=== 'fahrenheit') 
        return (num -32) * 5/9
    
      

}

console.log(convertTemperature(100, 'Celsius'));      //  212
console.log(convertTemperature(32, 'Fahrenheit'));    //  0
console.log(convertTemperature(0, 'Celsius'));         //  32
console.log(convertTemperature(212, 'Fahrenheit'));    //  100
console.log(convertTemperature(-40, 'Celsius'));       //  -40
console.log(convertTemperature(-40, 'Fahrenheit'));    //  -40

/*
Task-04

Write a function named sumOfEvenNumbers() which takes an array as an 
argument and returns the sum of all the even numbers in an array.

*/

const sumOfEvenNumbers = (arr) => {
    let sum = 0;
    for(let i = 0; i< arr.length; i++) {
        if(arr[i] % 2 === 0 ) {
            sum += arr[i]
        }
    }
    return sum 
}

console.log(sumOfEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));  //  30
console.log(sumOfEvenNumbers([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]));  //  110
console.log(sumOfEvenNumbers([1, 3, 5, 7, 9, 11, 13, 15, 17, 19]));  //  0
console.log(sumOfEvenNumbers([]));  //  0
console.log(sumOfEvenNumbers([1, 2, 3, 4, 5]));  //  6
console.log(sumOfEvenNumbers([10, 20, 30, 40, 50]));  //  150

/*
Task-05

Write a function named capsOdds() which takes an array argument and returns the array with 
all the odd index elements capitalized (converted to uppercase).

*/

const capsOdds = (arr) => arr.map((el, i) => i % 2 !== 0 ? el.toUpperCase() : el)
    
    


console.log(capsOdds(["Hello", "World"]));  // Output: ["Hello", "WORLD"]
console.log(capsOdds(["Jan", "Feb", "Mar", "Apr"]));  // Output: ["Jan", "FEB", "Mar", "APR"]
console.log(capsOdds(["Apple", "Banana", "123", "456", "Peach", "Kiwi"]));  // Output: ["Apple", "BANANA", "123", "456", "Peach", "KIWI"]
console.log(capsOdds([]));  // Output: []
console.log(capsOdds(["John !@#$%", "^&*() Doe"]));  // Output: ["John !@#$%", "^&*() DOE"]

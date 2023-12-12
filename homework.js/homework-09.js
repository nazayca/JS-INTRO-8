//Task-01
/*
Write a function named fizzBuzz1() which takes a number argument and 
returns "Fizz" if the given number is divisible by 3, "Buzz" if the number is 
divisible by 5, and "FizzBuzz" if the number is divisible by both 3 and 5. 
Otherwise, it will return the number itself.
*/

const fizzBuzz1 = (num) =>{
    if(num % 15 === 0) return 'FizzBuzz'
    if(num % 3 === 0) return 'Fizz'
    if(num % 5 === 0) return 'Buzz'
    else return num
}

console.log(fizzBuzz1(0));    // -> "FizzBuzz"
console.log(fizzBuzz1(1));    // -> 1
console.log(fizzBuzz1(3));    // -> "Fizz"
console.log(fizzBuzz1(5));    // -> "Buzz"
console.log(fizzBuzz1(30));   // -> "FizzBuzz"
console.log(fizzBuzz1(10));   // -> "Buzz"
console.log(fizzBuzz1(15));   // -> "FizzBuzz"
console.log(fizzBuzz1(-15)); // -> 'FizzBuzz'

//Task-02
/*
Write a function named fizzBuzz2() which takes a number argument and 
returns and array consist of numbers starting from 1 to given number. However, 
it will return "Fizz" for the numbers divided by 3, "Buzz" for the numbers divided 
by 5, and "FizzBuzz" for the numbers divided both by 3 and 5.
*/

const fizzBuzz2 = (num) => {
   let result = [] 
   for(let i = 1; i <= num; i++){
    if(i % 15 === 0 ) result.push('FizzBuzz')
    if(i % 3 === 0) result.push('Fizz')
    if(i % 5 === 0) result.push('Buzz')
    else result.push(i)
   }
   return result
}

console.log(fizzBuzz2(3));    // -> [ 1, 2, 'Fizz' ]
console.log(fizzBuzz2(5));    // -> [ 1, 2, 'Fizz', 4, 'Buzz' ]
console.log(fizzBuzz2(10));   // -> [ 1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz' ]
console.log(fizzBuzz2(15));   // -> [ 1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz' ]
console.log(fizzBuzz2(2));   //-> [ 1, 2 ]

//Task-03
/*
Write a function named findSumNumbers() which takes a string argument 
and returns sum of the all numbers appears in the string.
*/

const findSumNumbers = (str) => {               
    const digits = '1234567890';               
    let stringNum = '';                         
    let sum = 0;                               
    for(const char of str){                     
        if(digits.includes(char)){              
            stringNum += char;                  
        }
        else{
            stringNum += ' ';                   
        }
    }
    const arr = stringNum.split(' ');           
    const nums = arr.filter(x => x !== '');    
    for(const num of nums){                     
        sum += parseInt(num);                  
    }
    return sum; 
}

//Task-04
/*
Write a function named findBiggestNumber() which takes a string argument 
and returns the biggest number appears in the string.
*/

const findBiggestNumber = (str) => {
    const digits = '1234567890';                                   
    let stringNum = '';                                             
    let biggestNum = 0;                                             
    for(const char of str){                                         
        if(digits.includes(char)){                                  
            stringNum += char;                                      
        }
        else{
            stringNum += ' ';                                       
        }
    }
    const arr = stringNum.split(' ');                               
    const nums = arr.filter(x => x !== '');                         
    for(const num of nums){                                         
        if(parseInt(num) > biggestNum) biggestNum = parseInt(num);  
    }
    return biggestNum;                                              
 }

console.log(findBiggestNumber("abc$"));       // -> 0
console.log(findBiggestNumber("a1b4c  6#")); // -> 6
console.log(findBiggestNumber("ab110c045d"));// -> 110
console.log(findBiggestNumber("525"));       // -> 525
console.log(findBiggestNumber("3 for 10 dollars")); // -> 10


//Task-05
/*
Write a function named countOccurrencesOfCharacters() which takes a 
string argument and returns the count of repeated characters in the String. 
NOTE: If given String is empty, then return empty String. 
NOTE: It is case sensitive.
*/

const countOccurrencesOfCharacters = (str) => {         
    if(str === '') return str;   

    const arr = str.split('');                          
    const arr2 = [];                                    
    arr.map((element, index) => {                       
        let counter = 0;                                
        if(element === arr[index - 1]);                 
        else {                                          
            do{                                         
                counter = counter + 1;                  
                index++;                                
            } while(arr[index] === element)             
            
            arr2.push([counter, element]);   
        }           
    })
    return arr2.flat().join('');                        
 }

console.log(countOccurrencesOfCharacters(""));  // Output: ""
console.log(countOccurrencesOfCharacters("abc"));  // Output: "1a1b1c"
console.log(countOccurrencesOfCharacters("abbcca"));  // Output: "1a2b2c1a"
console.log(countOccurrencesOfCharacters("aaAAa"));  // Output: "2a2A1a"
console.log(countOccurrencesOfCharacters("www")); 

//Task-06
/*
Write a function named fibonacciSeries1() which takes a number n argument 
and returns the n series of Fibonacci numbers as an array.  
REMEMBER: Fibonacci series = 0, 1, 1, 2, 3, 5, 8, 13, 21

*/

const fibonacciSeries1 = (numberN) =>{
    
}





console.log(fibonacciSeries1(3));  //  [0, 1, 1]
console.log(fibonacciSeries1(5));  //  [0, 1, 1, 2, 3]
console.log(fibonacciSeries1(7));  //  [0, 1, 1, 2, 3, 5, 8]
console.log(fibonacciSeries1(8));  //  [0, 1, 1, 2, 3, 5, 8, 13]
console.log(fibonacciSeries1(1));  //  [0]
console.log(fibonacciSeries1(2));  //  [0, 1]

//Task-07
/*
Write a function named fibonacciSeries2() which takes a number n argument 
and returns the nth series of Fibonacci number as a number.
REMEMBER: Fibonacci series = 0, 1, 1, 2, 3, 5, 8, 13, 21
*/


console.log(fibonacciSeries2(2));  //  1
console.log(fibonacciSeries2(4));  //  2
console.log(fibonacciSeries2(8));  //  13
console.log(fibonacciSeries2(9));  //  21
console.log(fibonacciSeries2(1));  //  0

//Task-08
/*
Write a function named findUniques() which takes two array of number 
arguments and returns the array which has only the unique values from both 
given arrays.
NOTE: If both arrays are empty, then return an empty array. 
NOTE: If one of the array is empty, then return unique values from the other 
array.
*/

const findUniques = (arr1, arr2) => {
        const combinedArray = arr1.concat(arr2);
        const uniqueValues = Array.from(new Set(combinedArray));
    
        return uniqueValues;
    }

console.log(findUniques([], []));  //[]
console.log(findUniques([], [1, 2, 3, 2]));  //[1, 2, 3]
console.log(findUniques([1, 2, 3, 4], [3, 4, 5, 5]));  //[1, 2, 5]
console.log(findUniques([8, 9], [9, 8, 9]));  //[]
console.log(findUniques([-1, -2], [1, 2]));  //[-1, -2, 1, 2]


//Task-09
/*
Write a function named isPowerOf3() which takes a number argument and 
returns true if given number is equal to 3 power of the X. Otherwise, return 
false. 
NOTE: Numbers that are power of 3 = 1, 3, 9, 27, 81, 243....
NOTE: Ignore negative scenarios.
*/
 
const isPowerOf3 = (num) => {
    if(num < 1) return false;
    for(let i = num; i>1; i/=3){
        if(i % 3 !== 0){
            return false
        }
    }
    return true
}

console.log(isPowerOf3(1));    //  true
console.log(isPowerOf3(2));    //  false
console.log(isPowerOf3(3));    //  true
console.log(isPowerOf3(27));   //  true
console.log(isPowerOf3(100));  //  false
console.log(isPowerOf3(81));   //  true
console.log(isPowerOf3(9));    //  true







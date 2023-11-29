//Task-01
/*
Write a function named hasUpperCase() which takes a string argument and 
return true if there is an uppercase letter and false otherwise.
Examples:
hasUpperCase("javascript")  -> false
hasUpperCase("John")  -> true
hasUpperCase("$125.0")  -> false
hasUpperCase("")  -> false
*/

const hasUpperCase = (str) =>{
    for(let i = 0; i < str.length; i++){
        if(str.charAt(i)=== str.charAt(i).toUpperCase() && str.charAt(i) !== str.charAt(i).toLowerCase())return true;
    }
   return false;
}
console.log(hasUpperCase("javascript"));  // false
console.log(hasUpperCase("John"));        // true
console.log(hasUpperCase("$125.0"));     // false
console.log(hasUpperCase(""));           // false

//Task-02
/*
Write a function named noDigit() which takes a string argument and returns a 
new string with all digits removed from the original string .
Examples:
noDigit("")  -> ""
noDigit("Javascript")  -> "Javascript"
noDigit("123Hello")  -> "Hello"
noDigit("123Hello World149")  -> "Hello World”
noDigit("123Tech456Global149")  
*/

const noDigit = (str) =>{
 let result = '';

 for(const letter of str){
    if(!'0123456789'.includes(letter)){
        result+= letter
    }
 }
 return result;
}

console.log(noDigit(""));  // ""
console.log(noDigit("Javascript"));  // "Javascript"
console.log(noDigit("123Hello"));  // "Hello"
console.log(noDigit("123Hello World149"));  // "Hello World"
console.log(noDigit("123Tech456Global149"));// "TechGlobal"

//Task-03
/*
Write a function named noVowel() which takes a string argument and returns a 
new string with all vowels removed from the original string .
Examples:
noVowel("TechGlobal")  -> "TchGlbl"
noVowel("AEOxyz")  -> "xyz"
noVowel("Javascript")  -> "Jvscrpt"
noVowel("")  -> ""
noVowel("125$")  -> "125$"
*/

const noVowel = (str) =>{
    let result = '';
    for(const letters of str){
        if(!'AEOUIaeoui'.includes(letters)){
            result+= letters
        }
    }
    return result;
}


console.log(noVowel("TechGlobal"));  // "TchGlbl"
console.log(noVowel("AEOxyz"));      // "xyz"
console.log(noVowel("Javascript"));  // "Jvscrpt"
console.log(noVowel(""));            // ""
console.log(noVowel("125$"));        // "125$"

//Task-04
/*
Write a function named no13() which takes an array of numbers as argument 
and return a new array with all 13s replaced with 0s.  
Examples:
no13([1, 2, 3 ,4])  -> [1, 2, 3 ,4] 
no13([13, 2, 3])  -> [0, 2, 3]
no13([13, 13, 13 , 13, 13])  -> [0, 0, 0, 0, 0]
no13([])  
*/


const no13 = (arr) => arr.map((number)=>number === 13 ? 0 : number)
    
console.log(no13([1, 2, 3, 4]));        // [1, 2, 3, 4]
console.log(no13([13, 2, 3]));         // [0, 2, 3]
console.log(no13([13, 13, 13, 13, 13]));// [0, 0, 0, 0, 0]
console.log(no13([]));                 // []


//Task-05
/*
Write a function named middleInt() which takes three number arguments and 
return the middle number.  
Examples:
middleInt(1, 2, 2)  -> 2
middleInt(5, 5, 8)  -> 5
middleInt(5, 3, 5)  -> 5
middleInt(1, 1, 1)  -> 1
middleInt(-1, 25, 10)->10 1,25,10
*/
const middleInt = (num1,num2, num3) =>{
    sortedNum = [num1,num2,num3].sort((num1, num2) => num1 - num2);
    return sortedNum[1]
}



console.log(middleInt(1, 2, 2));    // 2
console.log(middleInt(5, 5, 8));    // 5
console.log(middleInt(5, 3, 5));    // 5
console.log(middleInt(1, 1, 1));    // 1
console.log(middleInt(-1, 25, 10)); // 10

//Task-06
/*
Write a function named sumOfDigits() which takes a string argument and 
returns sum of all digits from the original string.  
Examples:
sumOfDigits("Javascript")  -> 0
sumOfDigits("John’s age is 29")  -> 11
sumOfDigits("$125.0")  -> 8
sumOfDigits("")  -> 0
*/

const sumOfDigits = (str) =>{
    let sum = 0
    for(const char of str){
        if('0123456789'.includes(char)){
            sum += Number(char)
        }
    }
    return sum;
}


console.log(sumOfDigits("Javascript"));        // 0
console.log(sumOfDigits("John's age is 29")); // 11
console.log(sumOfDigits("$125.0"));          // 8
console.log(sumOfDigits("")); 

//Task-07
/*
Write a function named arrFactorial() which takes an array of numbers as 
argument and return the array with every number replaced with their factorials.
Examples:
arrFactorial([1, 2, 3 ,4])  ->  [1, 2, 6, 24]
arrFactorial([0, 5])  -> [1,120]
arrFactorial([5 , 0, 6])  -> [120, 1, 720]
arrFactorial([]
*/
const arrFactorial = (arr) => {
    const calculateFactorial = (num) => {
        if (num === 0 || num === 1) return 1;
        return num * calculateFactorial(num - 1);
    };

    return arr.map(num => calculateFactorial(num));
};
    
  

console.log(arrFactorial([1, 2, 3, 4]));   // [1, 2, 6, 24]
console.log(arrFactorial([0, 5]));         // [1, 120]
console.log(arrFactorial([5, 0, 6]));      // [120, 1, 720]
console.log(arrFactorial([]));  

//Task-08
/*
Write a function named categorizeCharacters() which takes a string word as 
argument and return an array as letters at index of 0, digits at index of 1 and 
specials at index of 2. 
Examples:
categorizeCharacters("1234")  -> [ '' , '1234', '' ] 
categorizeCharacters("abc123$#%")  -> [ 'abc', '123', '$#%' ]
categorizeCharacters("12ab$%3c%") --> [ 'ab', '123', '$%c%' ]
*/

const categorizeCharacters = (str) =>{
    const letters = [];
    const digits = [];
    const specials = [];
    for(char of str){
        if(char >= 'a' && char <= 'z')letters.push(char);
        else if(char >= '0' && char <= '9') digits.push(char);
        else specials.push(char)
        
    }
    return [letters.join(''), digits.join(''), specials.join('')]

}


console.log(categorizeCharacters("1234"));  // Output: [ '', '1234', '' ]
console.log(categorizeCharacters("abc123$#%"));  // Output: [ 'abc', '123', '$#%' ]
console.log(categorizeCharacters("12ab$%3c%"));
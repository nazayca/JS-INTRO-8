//Task-01
/*
Requirement:
Write a function named noSpace() which takes a string as argument and 
returns a new string with all the spaces removed.
Examples:
noSpace("")  ->  ""
noSpace("Javascript")  ->  "Javascript"
noSpace("    Hello   ")  -> "Hello"
noSpace(" Hello World   ")  -> "HelloWorld”
noSpace("Tech Global")  -> "TechGlobal"
*/
const noSpace = (str) => {
    if (str.includes(' ')) return str.split(' ').join('')
    else return str
}
console.log(noSpace(""))
console.log(noSpace("JavaScript"))
console.log(noSpace("    Hello    "))
console.log(noSpace(" Hello World   "))
console.log(noSpace("Tech Global"))

// Task-02
/*
Requirement:
Write a function named replaceFirstLast() which takes a string argument and 
returns a new string with the first and last characters replaced.
NOTE: If the length is less than 2, return an empty string.
NOTE: Ignore extra spaces before and after the string.
Examples:
replaceFirstLast("")  ->  ""
replaceFirstLast("Hello")  ->  "oellH"
replaceFirstLast("Tech Global")  -> "lech GlobaT"
replaceFirstLast("A")  -> ""
replaceFirstLast("    A      ")  -> "
*/

const replaceFirstLast = (str) => {
    if (str.trim().length < 2) {
        return ""
    } else {
        const firstChar = str[0];
        const middleChar = str.substring(1, str.length - 1)
        const lastChar = str[str.length - 1]

        return lastChar + middleChar + firstChar
    }

}
console.log(replaceFirstLast(""))
console.log(replaceFirstLast("Hello"))
console.log(replaceFirstLast("Tech Global"))
console.log(replaceFirstLast("A"))
console.log(replaceFirstLast("    A      "))

//Task-03
/*
Write a function named hasVowel() which takes a string argument and returns 
true if the string has a vowel, returns false if the string doesn’t contain any 
vowel letter.
NOTE: Vowels are = a, e, o, u, i.
NOTE: Ignore upper/lower cases.
Examples:
hasVowel("")  -> false
hasVowel("Javascript")  -> true
hasVowel("Tech Global")  -> true
hasVowel("1234")  -> false
hasVowel("ABC")  -> true
*/
const hasVowel = (str) => {
    const lower = str.toLowerCase()
    for (const letter of lower) {
        if (lower.length > 0 && 'aeoui'.includes(letter)) return true
    }
    return false
}
console.log(hasVowel(""))
console.log(hasVowel("Javascript"))
console.log(hasVowel("Tech Global"))
console.log(hasVowel("1234"))
console.log(hasVowel("ABC"))


const hasVowel1 = (str) => str.toLowerCase().split('').filter((letter) => 'aeoui'.includes(letter)).length > 0


console.log(hasVowel1(""))
console.log(hasVowel1("Javascript"))
console.log(hasVowel1("Tech Global"))
console.log(hasVowel1("1234"))
console.log(hasVowel1("ABC"))

//Task-04
/*Write a function named checkAge() which takes a number argument to be 
considered as the yearOfBirth and returns a message below based on the given 
year.
If the age is less than 16, then print "AGE IS NOT ALLOWED”"
If the age is 16 or more, then print "AGE IS ALLOWED"
If the age is more than 120 or a future year, print "AGE IS NOT VALID"
NOTE: Consider someone born in 2013 is 10 years old as of 2023.
Examples:
checkAge(2015) -> "AGE IS NOT ALLOWED"
checkAge(2007) -> "AGE IS ALLOWED"
checkAge(2050) -> "AGE IS NOT VALID"
checkAge(1920) -> "AGE IS ALLOWED"
checkAge(1800) -> "AGE IS NOT VALID"
*/

const checkAge = (yearOfBirth) => {
    const currentYear = 2023;
    const age = currentYear - yearOfBirth;
    if (age < 0 || age > 120) return 'AGE IS NOT VALID';
    if (age < 16) return 'AGE IS NOT ALLOWED';
    else return 'AGE IS ALLOWED'

}
console.log(checkAge(2015))
console.log(checkAge(2007))
console.log(checkAge(2050))
console.log(checkAge(1920))
console.log(checkAge(1800))

//Task-05
/*
Write a function named averageOfEdges() which takes three number 
arguments and will return average of min and max numbers .
Examples:
averageOfEdges(0, 0, 0)  -> 0
averageOfEdges(0, 0, 6)  -> 3
averageOfEdges(-2, -2, 10)  -> 4
averageOfEdges(-3, 15, -3)  -> 6
averageOfEdges(10, 13, 20)  -> 15
*/
const averageOfEdges = ((num1 = 0, num2 = 0, num3 = 0) => (Math.max(num1, num2, num3) + Math.min(num1, num2, num3)) / 2)
console.log(averageOfEdges(0, 0, 0))
console.log(averageOfEdges(0, 0, 6))
console.log(averageOfEdges(-2, -2, 10))
console.log(averageOfEdges(-3, 15, -3))
console.log(averageOfEdges(10, 13, 20))

//Task-06
/*Write a function named noA() which takes an array of strings as argument and 
will return a new array with all elements starting with "A" or "a" replaced with 
"###".
Examples:
noA(["javascript", "hello", "123", "xyz"])  ->  ["javascript", "hello", "123", "xyz"]
noA(["apple", "123", "ABC", "javascript"])  ->  ["###", "123", "###", 
"javascript"]
noA(["apple", "abc", "ABC", "Alex", "A"])  -> ["###", "###", "###", "###", 
"###"]
*/


const noA = (arr) => {
    return arr.map((element) =>{
        if (element.toLowerCase().startsWith('a')){
            return '###'
        }
        return element
    })
    
}

  console.log(noA(["javascript", "hello", "123", "xyz"])); 
  console.log(noA(["apple", "123", "ABC", "javascript"])); 
  console.log(noA(["apple", "abc", "ABC", "Alex", "A"])); 

 
  // OR

 const noA1 = (arr) => {
    for(i = 0; i<arr.length ; i++){
        if(arr[i].toLowerCase().startsWith('a')){
             arr[i]= '###'
        }
    }
    return arr
 }
 console.log(noA1(["javascript", "hello", "123", "xyz"])); 
 console.log(noA1(["apple", "123", "ABC", "javascript"])); 
 console.log(noA1(["apple", "abc", "ABC", "Alex", "A"])); 

 //Task-07

 /*
Write a function named no3and5() which takes an array of integer numbers as 
argument and will return a new array with elements replaced by conditions 
below.
If element can be divided by 5, replace it with 99 
If element can be divided by 3, replace it with 100 
If element can be divided by both 3 and 5, replace it with 101
Examples:
no3and5([7, 4, 11, 23, 17])  -> [7, 4, 11, 23, 17]
no3and5([3, 4, 5, 6])  -> [100, 4, 99, 100]
no3and5([10, 11, 12, 13, 14, 15])  -> [99, 11, 100, 13, 14, 101]
*/

const no3and5 = (arr) => {
    const result = []
    for(const element of arr){
        if(element % 15 === 0) {
            result.push(101)
        }
        else if (element % 5 === 0){
           result.push(99);
        }
        else if (element % 3 === 0){
            result.push(100)
        }else{
            result.push(element)
        }
    }
    return result
}

console.log(no3and5([7, 4, 11, 23, 17])); 
console.log(no3and5([3, 4, 5, 6])); 
console.log(no3and5([10, 11, 12, 13, 14, 15])); 

//OR

const no3and5A = (arr) => {
    return arr.map((element) => {
        if (element % 15 === 0){
            return 101
        }
        else if(element % 3 === 0){
            return 100
        }
        else if(element % 5 === 0){
            return 99
        
        }
        return element
    })
}


console.log(no3and5A([7, 4, 11, 23, 17])); 
console.log(no3and5A([3, 4, 5, 6])); 
console.log(no3and5A([10, 11, 12, 13, 14, 15])); 

//Task-08
/*
Write a function named countPrimes() which takes an array of integer 
numbers as argument and will return the number of the prime numbers in the 
given array.
NOTE: Prime number is a number that can be divided only by 1 and itself .
NOTE: Negative numbers cannot be prime .
Examples: 2,3,5,7,11,13,17,19,23,29,31,37 etc. 
NOTE: Smallest prime number is 2.
Examples:
countPrimes([-10, -3, 0, 1])  -> 0
countPrimes([7, 4, 11, 23, 17])  -> 4
countPrimes([41, 53, 19, 47, 67])  -> 5
*/

const countPrimes = (...arr) =>{
    let count = 0;
    const isPrime = (num)=>{
        if(num<2)return false;
        if(num === 2 || num === 3)return false
        if(num % 2 === 0 || num % 3 === 0)return false
       
        let d = 5;
       while(d<num){
        if(num % d === 0)return false;
        d+=2
       }
        
    }
    for (const num of arr) {
        if (isPrime(num)) {
          count++;
        }
      }
      return count;
   
}  

console.log(countPrimes([-10, -3, 0, 1])); // Output: 0
console.log(countPrimes([7, 4, 11, 23, 17])); // Output: 4
console.log(countPrimes([41, 53, 19, 47, 67])); // Output: 5

    
       
    


//Task-09
/*
Write a function named removeDuplicates() which takes an array argument 
and returns a new array with all the duplicates removed.
Examples:
removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60])  -> [10, 20, 35, 60, 
70]
removeDuplicates([1, 2, 5, 2, 3])  -> [1, 2, 5, 3]
removeDuplicates([0, -1, -2, -2, -1])  -> [0, -1, -2]
removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"])  -> ["abc", "xyz", 
"123", "ab", "ABC"]
removeDuplicates(["1", "2", "3", "2", "3"]) 
*/
const removeDuplicates = (arr) =>{
    const newArr = [];
    for(i = 0; i<arr.length ; i++){
        if(newArr.indexOf(arr[i])=== -1){
            newArr.push(arr[i])
        }
    }
    return newArr
}


console.log(removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60])); 
console.log(removeDuplicates([1, 2, 5, 2, 3]));
console.log(removeDuplicates([0, -1, -2, -2, -1])); 
console.log(removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"])); 
console.log(removeDuplicates(["1", "2", "3", "2", "3"])); 



//OR
const removeDuplicates1 = (arr) => {
return [ ...new Set(arr)]
}
console.log(removeDuplicates1([10, 20, 35, 20, 35, 60, 70, 60])); 
console.log(removeDuplicates1([1, 2, 5, 2, 3]));
console.log(removeDuplicates1([0, -1, -2, -2, -1])); 
console.log(removeDuplicates1(["abc", "xyz", "123", "ab", "abc", "ABC"])); 
console.log(removeDuplicates1(["1", "2", "3", "2", "3"])); 


//Task-01
/*
Write a function named countPalindrome() which takes a string and returns 
the number of  palindrome words.
Note: A palindrome word is a word that reads the same forwards and 
backwards. Example: level, radar, deed, refer
*/

const countPalindrome = (str) => {
    return str
      .toLowerCase()
      .split(' ')
      .filter((word) => word === word.split('').reverse().join(''))
      .length;
  };
  
console.log(countPalindrome("Mom and Dad")); //  2
console.log(countPalindrome("See you at noon")); //  1
console.log(countPalindrome("Kayak races attracts racecar drivers")); //  2
console.log(countPalindrome("")); //  0
console.log(countPalindrome("No palindrome here")); //  0

//Task-02
/*
Write a function named sum() which takes an array of numbers and a boolean 
value as arguments. It will return the sum of the numbers positioned at even 
indexes if true. And, return sum of numbers positioned at odd indexes if false.
*/

const sum = (numbers, evenIndexes) => {
    return numbers.reduce((total, num, index) => {
      if ((evenIndexes && index % 2 === 0) || (!evenIndexes && index % 2 !== 0)) {
        return total + num;
      }
      return total;
    }, 0);
  };
  

console.log(sum([1, 5, 10], true)); //  11
console.log(sum([3, 7, 2, 5, 10], false)); //  12
console.log(sum([-1, 1, -2, 2], true)); //  -3
console.log(sum([0, -1, 15, 1], false)); //  0
console.log(sum([1, 2, 3, 4, -4], true)); //  0

//Task-03
/*
Write a function named nthChars() which takes a string and a number as 
arguments and returns the string back with every nth characters.
*/

function nthChars(str, n) {
  let result = '';
  for (let i = n - 1; i < str.length; i += n) {
      result += str[i];
  }
  return result;
}

console.log(nthChars("Java", 2)); //  "aa"
console.log(nthChars("JavaScript", 5)); //  "St"
console.log(nthChars("Java", 3)); //  "v"
console.log(nthChars("Hi", 4)); //  ""
console.log(nthChars("0123456789", 2)); //  "13579"


//Task-04
/*
Write a function named canFormString() which takes two string arguments 
and returns true if the second string can be formed by rearranging the 
characters of first string. Return false otherwise.
NOTE: This method is case-insensitive and ignore the white spaces.
*/

const canFormString = (str1, str2) => {
  const cleanStr1 = str1.split(' ').join('').toLowerCase();
  const cleanStr2 = str2.split(' ').join('').toLowerCase();

  return cleanStr1.split('').sort().join('') === cleanStr2.split('').sort().join('');
}
  
console.log(canFormString("Hello", "Hi")); //  false
console.log(canFormString("programming", "gaming")); //  true
console.log(canFormString("halogen", "hello")); //  false
console.log(canFormString("CONVERSATION", "voices rant on")); //  true
console.log(canFormString("12", "123")); //  false

//Task-05
/*
Write a function named isAnagram() which takes two string arguments and 
returns true if the given strings are anagram. Return false otherwise.
NOTE: An anagram is a word or phrase formed by rearranging the letters of 
another word or phrase. In the context of strings, checking if two strings are 
anagrams of each other means verifying if they contain the same characters in 
the same quantities, regardless of the order of those characters.
NOTE: This method is case-insensitive and ignore the white spaces.
*/

const isAnagram = (str1, str2) => {
  const cleanStr = str => str.split(' ').join('').toLowerCase();

  const sortedStr1 = cleanStr (str1).split('').sort().join('');
  const sortedStr2 = cleanStr (str2).split('').sort().join('');

  return sortedStr1 === sortedStr2;
}



console.log(isAnagram("Apple", "Peach"));                     // false
console.log(isAnagram("listen", "silent"));                   // true
console.log(isAnagram("astronomer", "moon starer"));          // true
console.log(isAnagram("CINEMA", "iceman"));                   // true
console.log(isAnagram("123", "1234"));                        // false

//Task-06
/*
equirement:
Write a function named count() which takes an array of numbers and a 
boolean value as arguments. It will return the total count of the even numbers if 
the boolean value is true. And return the total count of the odd numbers if the 
boolean value is false.
*/

const count = (numbers, isEven) => {

  let count = 0;

    numbers.forEach(num => {
        if ((isEven && num % 2 === 0) || (!isEven && num % 2 !== 0)) {
            count++;
        }
    });

    return count;
}

console.log(count([1, 5, 10], true));                // 1
console.log(count([3, 7, 2, 5, 10], false));          // 3
console.log(count([-1, 1, -2, 2], true));             // 2
console.log(count([0, -1, 15, 1], false));            // 3
console.log(count([1, 2, 3, 4, -4], true));          // 3

//Task-07
/*
Write a function named sumDigitsDouble() which takes a string and returns 
the sum of the digits in the given String multiplied by 2. Return -1 if the given 
string does not have any digits. Ignore negative numbers.
*/

const sumDigitsDouble = (str) => {


}


console.log(sumDigitsDouble("Javascript"));   //  -1
console.log(sumDigitsDouble("23abc45"));      //  28
console.log(sumDigitsDouble("Hi-23"));         //  10
console.log(sumDigitsDouble("ab12"));          //  6
console.log(sumDigitsDouble("n0numh3r3"));     //  12

//Task-08
/*
Write a function named countOccurrence() which takes two string arguments 
and returns how many times that the first string can form the second string
*/




//Task-01
/*
Write a  program that generates 3 random numbers 
between 1 to 100 (1 and 100 are included)
Print true if the average of the random numbers is 
greater or equals 50. 
Print false if the average of the random numbers is less 
than 50.
*/

let num1 = Math.floor(Math.random() * 100)+1;
let num2 = Math.floor(Math.random() * 100)+1;
let num3= Math.floor(Math.random() * 100)+1;
let average = Math.floor((num1 + num2 + num3) / 3);
console.log(average, average >= 50 ? true : false);

//Task-02
/*
Write a  program that generates 3 random numbers 
between 1 to 3 (1 and 3 are included)
-If all numbers are different, then print “NO MATCH”
-If any of those 2 numbers are equal, then print 
“DOUBLE MATCH”
-If all 3 numbers are equal, then print “TRIPLE MATCH
*/

let rand1 = Math.floor((Math.random() * 3) + 1);
let rand2 = Math.floor((Math.random() * 3) + 1);
let rand3 = Math.floor((Math.random() * 3) + 1);

console.log(`${rand1} ${rand2} ${rand3} `)

if(rand1 === rand2 && rand2 === rand3) console.log('TRIPLE MATCH');
else if(rand1 !== rand2 && rand2 !== rand3) console.log('NO MATCH')
else console.log('DOUBLE MATCH');

//Task-03
/*
Write a function named as hasA() which takes a string 
word as an argument and returns true if given string 
has a character "a" or "A", and false otherwise when 
invoked.
NOTE: Assume you will not be given an empty word.
Examples:
hasA("Tech")  -> false
hasA("Global")  -> true
hasA("")  -> false
hasA("Apple")  -> true
*/

const hasA = (str) =>{
   return str.includes('a') || str.includes('A')
   
}

console.log(hasA("Tech"));     // Output: false
console.log(hasA("Global"));   // Output: true
console.log(hasA(""));         // Output: false
console.log(hasA("Apple"));    // Output: true

//Task-04
/*
Write a function named as doubleOrTripleWord() 
which takes a string word as an argument and returns 
the given word back tripled if the string length is even 
or doubled if the string length is odd when invoked.
Examples:
doubleOrTripleWord("Tech")  -> "TechTechTech"
doubleOrTripleWord("Apple")  -> "AppleApple”
doubleOrTripleWord("")  -> ""
doubleOrTripleWord(" ")  -> " "
doubleOrTripleWord("1")  -> "11"
doubleOrTripleWord("22")  -> "222222"
*/

const doubleOrTripleWord = (str) =>{
   if(str === '') return '';
   if(str.length % 2 === 0)return str + str + str;
   else return str + str
}
console.log(doubleOrTripleWord("Tech"));   // Output: "TechTechTech"
console.log(doubleOrTripleWord("Apple"));  // Output: "AppleApple"
console.log(doubleOrTripleWord(""));       // Output: ""
console.log(doubleOrTripleWord(" "));      // Output: " "
console.log(doubleOrTripleWord("1"));      // Output: "11"
console.log(doubleOrTripleWord("22"));     // Output: "222222"

//Task-05
/*
Write a function named as firstWord() which takes a 
string word as an argument and returns the first word 
from the given string when invoked.
NOTE: Return empty string if the given string does not 
have any word.
Examples:
firstWord("Hello World")  -> "Hello"
firstWord("I like JavaScript")  -> "I"
firstWord("Hello")  -> "Hello"
firstWord("")  -> ""
firstWord("    ")  -> 
*/

const firstWord = (str) =>{
   if(str === '') return '';
   else return str.trim().split(' ')[0]
}
console.log(firstWord("Hello World"));        // Output: "Hello"
console.log(firstWord("I like JavaScript")); // Output: "I"
console.log(firstWord("Hello"));              // Output: "Hello"
console.log(firstWord(""));                   // Output: ""
console.log(firstWord("    "));               // Output: ""

//Task-06
/*
Write a function named as lastWord() which takes a 
string word as an argument and returns the last word 
from the given string when invoked.
NOTE: Return empty string if the given string does not 
have any word.
Examples:
lastWord("Hello World")  -> "World"
lastWord("I like JavaScript")  -> "JavaScript”
lastWord("Hello")  -> "Hello"
lastWord("")  -> ""
lastWord("    ")  -> ""
*/

const lastWord = (str) =>{
   if(str === '') return '';
   else return str.split(' ').slice(-1).join(' ')
}
console.log(lastWord("Hello World"));        // Output: "World"
console.log(lastWord("I like JavaScript")); // Output: "JavaScript"
console.log(lastWord("Hello"));              // Output: "Hello"
console.log(lastWord(""));                   // Output: ""
console.log(lastWord("    "));               // Output: ""

//Task-07
/*
Write a function named as firstlastWord() which takes 
a string word as an argument and returns the first and 
last words from the given string when invoked.
NOTE: Return empty string if the given string does not 
have any word.
Examples:
firstLastWord("Hello World")  -> "HelloWorld"
firstLastWord("I like JavaScript")  -> "IJavaScript”
firstLastWord("Hello")  -> "HelloHello"
firstLastWord("")  -> ""
firstLastWord("    ")  -> ""
*/

const firstLastWord = (str) =>{
   if(str === '') return '';
   else return str.trim().split(' ')[0] + str.trim().split(' ').slice(-1)
}
console.log(firstLastWord("Hello World"));        // Output: "HelloWorld"
console.log(firstLastWord("I like JavaScript")); // Output: "IJavaScript"
console.log(firstLastWord("Hello"));              // Output: "HelloHello"
console.log(firstLastWord(""));                   // Output: ""
console.log(firstLastWord("    "));               // Output: ""

//Task-08
/*
Write a function named as startVowel() which takes a 
string word as an argument and returns true if given 
string starts with a vowel, and false otherwise when 
invoked.
NOTE: Vowel letters: a, e, i o, u, A, E, I, O, U 
Examples:
startVowel("Hello")  -> false
startVowel("Apple") -> true
startVowel("orange")  -> true
startVowel("")  -> false
startVowel("    ")  -> false
startVowel("123")  -> false
*/

const startVowel = (str) =>{
   if('aeiouAEIOU'.includes(str[0]))return true
   else return false
}

console.log(startVowel("Hello"));   // Output: false
console.log(startVowel("Apple"));   // Output: true
console.log(startVowel("orange"));  // Output: true
console.log(startVowel(""));        // Output: false
console.log(startVowel("    "));    // Output: false
console.log(startVowel("123"));     // Output: false

//Task-09
/*
Write a function named as swap4() which takes a 
string word as an argument and returns the string back 
with its first and last 4 characters swapped when 
invoked.
NOTE: Return empty string if the given string does not 
have 8 or more characters.
Examples:
swap4("abc")  -> ""
swap4("JavaScript")  -> "riptScJava"
swap4("TechGlobal")  -> "obalGlTech"
swap4("")  -> ""
swap4("    ")  -> ""
swap4("Apple")  -> ""
*/

const swap4 = (str) =>{
   const first4Char = str.slice(0,4);
   const last4Char = str.slice(-4);
   const middleChar = str.slice(4,-4);
   if(str.length < 8) return '';
   else return last4Char + middleChar + first4Char
}
console.log(swap4("abc"));         // Output: ""
console.log(swap4("JavaScript"));  // Output: "riptScJava"
console.log(swap4("TechGlobal"));  // Output: "obalGlTech"
console.log(swap4(""));            // Output: ""
console.log(swap4("    "));        // Output: ""
console.log(swap4("Apple"));       // Output: ""
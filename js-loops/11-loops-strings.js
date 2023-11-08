// Count how many vowel letters you have in the string - 3
// Vowels are = AEOUIaeoui

const school = 'TechGlobal';

let countV = 0;

for(let i = 0; i <= school.length-1; i++) {
    if('AEOUIaeoui'.includes(school[i])) countV++;
}

console.log(countV); // 5


countV = 0;

for(const character of school) {
    if('AEOUIaeoui'.indexOf(character) !== -1) countV++;
}

console.log(countV); // 3


/*
*** ONE OF THE MOST ASKED INTERVIEW QUESTION!!!
Assume you are given a string and asked to reverse it

Adam    -> madA
Hello   -> olleH

The reversed 'Adam' is 'madA'.
The reversed 'Hello' is 'olleH'.
*/

let word = 'Adam';
let reversedWord = '';

for(let i = word.length-1; i >= 0; i--) { // i = -1
    reversedWord += word[i]; 
}

console.log(reversedWord); 

reversedWord = word.split('').reverse().join('');

console.log(`The revesed '${word}' is '${reversedWord}'.`);


/*
*** ONE OF THE MOST ASKED INTERVIEW QUESTION!!!
Assume you are given a string and asked to find if it is palindrome
Palindrome means a word or sentence reads the same forward and backward.
This program should be case-insensitive

civic   -> The 'civic' is PALINDROME!
madam   -> The 'madam' is PALINDROME!
Abba    -> The 'Abba' is PALINDROME!
12321   -> The '12321' is PALINDROME!

abc     -> The 'abc' is NOT PALINDROME!
*/

let str = 'Abba';

if(str.toLowerCase() === str.split('').reverse().join('').toLowerCase()) console.log(`The '${str}' is PALINDROME!`);
else console.log(`The '${str}' is NOT PALINDROME!`);
/*
Question 1:
Write a program that extracts expected values from a given String using JS S
tring functions.

"I like apples and oranges" 		                    -> "APPLE"
"Java is not a scripting programming language"  	    -> "JavaScript”
"I don't like books" 			                        -> "I like books"
*/

// Solution 1:
let sent1 = "I like apples and oranges";
let sent2 = "Java is not a scripting programming language";
let sent3 = "I don't like books";

console.log(sent1.slice(7, 12).toUpperCase());
console.log(sent1.toUpperCase().slice(7, 12));

let Java = sent2.slice(0, 4); // Java
let S = sent2[14].toUpperCase();
let cript = sent2.slice(15, 20); // cript

let JavaScript = Java + S + cript;
console.log("JavaScript: ", JavaScript); // JavaScript

console.log(sent3.slice(0, 1) + sent3.slice(7));
console.log(sent3.slice(0, 2).trim() + sent3.slice(7));
console.log(sent3.replace("don't ", ""));

// Whitespaces
// console.log("I don't like       books".trim());
// console.log("I don't like books     ".trim());

/*
 Question 2:
Assume that you are given a String of any length. 
Find:
-The length of the String
-First char in the String
-Last char in the String
-Check if the String contains any vowel letters 	
    -if it has any vowel, then print true
    -Else, print false
    Vowels = a, e, i, u, o, A, E, I, U, O

Test Data 1:
let s1 = "JavaScript";

Expected Result 1:
The length is = 10
The first char is = J
The last char is = t
true

Test Data 2:
let s1 = "";

Expected Result 2:
The length is = 0
The first char is = undefined
The last char is = undefined
false
*/

// Solution 2:
// Vowels = a, e, i, u, o, A, E, I, U, O
let s1 = "JavaScript"; // true
let s2 = ""; // false

console.log(`The length of ${s1}: ${s1.length}`); // 10
console.log(`The first character of ${s1}: ${s1[0]}`); // J
console.log(`The last character of ${s1}: ${s1[s1.length - 1]}`); // t
console.log(`The last character of ${s1}: ${s1.slice(-1)}`); // t
console.log(`The last character of ${s1}: ${s1.slice(s1.length - 1)}`); // t

console.log(`The length of ${s2}: ${s2.length}`); // 0
console.log(`The first character of ${s2}: ${s2[0]}`); // undefined
console.log(`The last character of ${s2}: ${s2[s2.length - 1]}`); // undefined
console.log(`The last character of ${s2}: ${s2.slice(-1)}`); // null
console.log(`The last character of ${s2}: ${s2.slice(s2.length - 1)}`); // null

console.log("Apple".includes("a", 0)); // false
console.log("Apple".includes("A", 0)); // true

console.log(
  s1.includes("a") ||
    s1.includes("e") ||
    s1.includes("i") ||
    s1.includes("u") ||
    s1.includes("o") ||
    s1.includes("A") ||
    s1.includes("E") ||
    s1.includes("I") ||
    s1.includes("U") ||
    s1.includes("O")
); // true

console.log(
  s2.includes("a") ||
    s2.includes("e") ||
    s2.includes("i") ||
    s2.includes("u") ||
    s2.includes("o") ||
    s2.includes("A") ||
    s2.includes("E") ||
    s2.includes("I") ||
    s2.includes("U") ||
    s2.includes("O")
); // false

let apple = "Apple";
console.log(
  apple.includes("a") ||
    apple.includes("e") ||
    apple.includes("i") ||
    apple.includes("u") ||
    apple.includes("o") ||
    apple.includes("A") ||
    apple.includes("E") ||
    apple.includes("I") ||
    apple.includes("U") ||
    apple.includes("O")
); // true

console.log(
  apple.toLowerCase().includes("a") ||
    apple.toLowerCase().includes("e") ||
    apple.toLowerCase().includes("i") ||
    apple.toLowerCase().includes("u") ||
    apple.toLowerCase().includes("o")
); // true

let appleLower = apple.toLowerCase();
console.log(
  appleLower.includes("a") ||
    appleLower.includes("e") ||
    appleLower.includes("i") ||
    appleLower.includes("u") ||
    appleLower.includes("o")
); // true

let name01 = "Joe";

console.log(name01.search("o")); // 1
console.log(name01.search("j")); // -1
console.log(name01.search("J")); // 0
console.log(name01.search("f")); // -1

// search
console.log(
  appleLower.search("a") !== -1 ||
    appleLower.search("e") !== -1 ||
    appleLower.search("i") !== -1 ||
    appleLower.search("u") !== -1 ||
    appleLower.search("o") !== -1
); // true

console.log(
  s1.search("a") !== -1 ||
    s1.search("e") !== -1 ||
    s1.search("i") !== -1 ||
    s1.search("u") !== -1 ||
    s1.search("o") !== -1
); // true
console.log(
  s2.search("a") !== -1 ||
    s2.search("e") !== -1 ||
    s2.search("i") !== -1 ||
    s2.search("u") !== -1 ||
    s2.search("o") !== -1
); // false

/*
Question 3: 

Assume that you are given a String of any odd length. 
Find the middle character for the given String. 

Test Data 1:
let s2 = "x";

Expected Result 1:
"x"

Test Data 2:
let s2 = "abc";

Expected Result 2:
"b"


Test Data 3:
let s2 = "civic";

Expected Result 3:
"v"
*/

// Solution 3
let s3 = "x"; // odd
let s4 = "abc"; // odd
let s5 = "civic"; // odd

console.log(s3[Math.floor(s3.length / 2)]); // 0 => x
console.log(s4[Math.floor(s4.length / 2)]); // 1 => b
console.log(s5[Math.floor(s5.length / 2)]); // 2 => v

console.log(s3[(s3.length - 1) / 2]); // 0 => x (0 / 2)
console.log(s4[(s4.length - 1) / 2]); // 1 => b (2 / 2)
console.log(s5[(s5.length - 1) / 2]); // 2 => v (4 / 2)

/*
Question 4
Assume that you are given a String of any even length including empty. 
Find the middle 2 characters for the given String. 

Test Data 1:
let s3 = "";

Expected Result 1:
""
Test Data 2:
let s3 = "abcd";

Expected Result 2:
"bc"

Test Data 3:
let s3 = "JavaScript";

Expected Result 3:
"Sc"
*/

// Solution 4
let s6 = "";
let s7 = "abcd";
let s8 = "JavaScript";

// Note: this solution only works when string is not empty
console.log(s6[s6.length / 2 - 1] + s6[s6.length / 2]); // NaN
console.log(s7[s7.length / 2 - 1] + s7[s7.length / 2]); // bc
console.log(s8[s8.length / 2 - 1] + s8[s8.length / 2]); // Sc

console.log(s6.slice(s6.length / 2 - 1, s6.length / 2 + 1));
console.log(s7.slice(s7.length / 2 - 1, s7.length / 2 + 1));
console.log(s8.slice(s8.length / 2 - 1, s8.length / 2 + 1));

/*
Question 5
Requirement:
Write a program that divides the given String. Assume the length of the String will at least 
be 4.
-Find and print the first two characters
-Find and print the last two characters 
-Find and print all the middle characters other than first and last 2 characters


Test Data 1:
let s4 = "abcd";

Expected Result 1:
The first 2 characters are = ab
The last 2 characters are = cd
The other characters are = 


Test Data 2:
let s4 = "JavaScript";

Expected Result 2:
The first 2 characters are = Ja
The last 2 characters are = pt
The other characters  are = vaScri
*/

let str1 = "abcd"; // ab, "", cd
let str2 = "JavaScript"; // Ja, vaScri, pt

// Solution 5
// Get the first 2 chars
const firstTwoChars = str1.slice(0, 2);
// Get the last 2 chars
// const lastTwoChar = str1.slice(str1.length - 2, str1.length);
const lastTwoChars = str1.slice(-2);
// Get the middle chars
const middleChars = str1.slice(2, str1.length - 2);

console.log("First two chars: ", firstTwoChars);
console.log("Last two chars: ", lastTwoChars);
console.log("Middle chars: ", middleChars);

// Test for str2
console.log("First two chars: ", str2.slice(0, 2));
console.log("Last two chars: ", str2.slice(-2));
console.log("Middle chars: ", str2.slice(2, str2.length - 2));

// subString() solution
console.log("First two chars: ", str2.substring(0, 2)); // Ja
console.log("Last two chars: ", str2.substring(str2.length - 2, str2.length)); // pt
console.log("Middle chars: ", str2.substring(2, str2.length - 2)); // vaScri

/*
Question 6

Requirement:
Write a program that checks if a given String starts and ends with xx. 
-If given String starts and ends with xx, then print true. 
-Otherwise, print false

Test Data 1:
let s7 = "";

Expected Result 1:
false


Test Data 2:
let s7 = "red";

Expected Result 2:
false



Test Data 3:
let s7 = "green";

Expected Result 3:
false



Test Data 4:
let s7 = "xxbluexx";

Expected Result 4:
true
*/

// Solution 6

let str3 = "";
let str4 = "red";
let str5 = "green";
let str6 = "xxbluexx";

function checkIfXX(str) {
  // check if str starts and ends with "xx"
  console.log(str.startsWith("xx") && str.endsWith("xx"));
  console.log(
    str.slice(0, 2) === "xx" && str.slice(str.length - 2, str.length) === "xx"
  );
  console.log(
    str.slice(0, 2).includes("xx") &&
      str.slice(str.length - 2, str.length).includes("xx")
  );
  // return str.startsWith("xx") && str.endsWith("xx");
}

checkIfXX(str3);
checkIfXX(str4);
checkIfXX(str5);
checkIfXX(str6);

/*
Requirement:
Write a program that swaps the first and last word of a given sentence as a String. 

Test Data 1:
let s8 = "";

Expected Result 1:
""


Test Data 2:
let s8 = " ";

Expected Result 2:
" "


Test Data 3:
let s8 = "I like Apple";

Expected Result 3:
"Apple like I"



Test Data 4:
let s8 = "JavaScript is nice to learn";

Expected Result 4:
"learn is nice to JavaScript"

*/

let swap1 = ""; // ""
let swap2 = " "; // " "
let swap3 = "I like Apple"; // "Apple like I"
let swap4 = "JavaScript is nice to learn"; // learn is nice to JavaScript

function swapWords(sent) {
  const first = sent.slice(0, sent.indexOf(" "));
  const last = sent.slice(sent.lastIndexOf(" ") + 1);
  const middle = sent.slice(sent.indexOf(" "), sent.lastIndexOf(" ") + 1);
  console.log(last + middle + first);

  //  Note: Not tested on whitespace or emtpy string but seems correct
  const fIdx = sent.indexOf(" ");
  const lIdx = sent.lastIndexOf(" ");
  console.log(
    "Using indexes: ",
    sent.slice(lIdx + 1) + sent.slice(fIdx, lIdx + 1) + sent.slice(0, fIdx)
  );
}

swapWords(swap1);
swapWords(swap2);
swapWords(swap3);
swapWords(swap4);
/*
Task-01
Write a function named toInitials() which takes a string argument considered 
to be full name and returns initials of the given full name.
NOTE: Initials should be separated with a space and followed with a period.
Assume you will always be given first name and last name only. 
*/

const toInitials =(str) => str.split(' ').map(name => name.charAt(0).toUpperCase()).join(' . ')


console.log(toInitials("Joe Doe"));      //  "J. D."
console.log(toInitials("Alex Reyes"));    //  "A. R."
console.log(toInitials("Tom Cruise"));    //  "T. C."
console.log(toInitials("Bruce Willis"));  //  "B. W. "
console.log(toInitials("Ja Le"));         //  "J. L."
console.log(toInitials("Ayca Ayca Ayca"));         //  "J. L."


/*
Task-02
Write a function named hasNumbers() which takes a string argument and 
returns true if there is a number and false if there isn’t. 
*/

const hasNumbers = (str)=> {
    if(str === '') return false
    return str.split('').filter(i => i >= '0' && i <= '9').length>0
}

console.log(hasNumbers(""));                   //  false
console.log(hasNumbers("John is 34 years old")); //  true
console.log(hasNumbers("Hello 3"));             //  true
console.log(hasNumbers("125$"));                 //  true
console.log(hasNumbers("   a   "));             //  false
console.log(hasNumbers("      "));               //  false
console.log(hasNumbers("!@#$%^&*()_+"));        //  false

/*
Task-03

Write a function named elementLength() which takes an array argument and 
returns the length of each element as a separate array.
*/

const elementLength = (arr) => arr.map(element => element.length)


console.log(elementLength(["Hello", "World"])); //  [5, 5]
console.log(elementLength(["Apple", "Banana", "Orange", "Pear"])); //  [5, 6, 6, 4]
console.log(elementLength(["BMW", "Mercedes", "Audi"])); //  [3, 8, 4]
console.log(elementLength([])); //  []
console.log(elementLength(["Trampoline", "", "Tennis", "Basketball"])); //  [10, 0, 6, 10]

/*
Task-04
Write a function named isArraySumEvenOrOdd() which takes an array of 
numbers and calculates if the sum of its elements is even or odd.
Note: If the array is empty return even.
*/

const isArraySumEvenOrOdd = (arr) => {
   return (arr.reduce((total, num) => total + num, 0) % 2 === 0) ? 'even' : 'odd'
}

console.log(isArraySumEvenOrOdd([]));         //  "even"
console.log(isArraySumEvenOrOdd([0, -1, -5])); //  "even"
console.log(isArraySumEvenOrOdd([7, 1, 8, 1])); //  "odd"
console.log(isArraySumEvenOrOdd([0, 0]));       //  "even"
console.log(isArraySumEvenOrOdd([1, 1, 1, 1, 1])); //  "odd"

/*
Task-05
Write a function named reverse() which takes a string argument and returns the given string 
reversed. 
*/

const reverse = (str) => {
    return str.split('').reverse().join('')
}

console.log(reverse("Hello World"));          //  "dlroW olleH"
console.log(reverse("TechGlobal"));           //  "labolGhceT"
console.log(reverse("Basketball is fun"));    //  "nuf si llabteksaB"
console.log(reverse(""));                     //  ""
console.log(reverse("Apples 456"));           //  "654 selppA"



/*
Task-06
Write a function named reverseWords() which takes a string argument and returns a string 
with each word within that string reversed but still in the same order as the initial string. 
*/

const reverseWords =(str) => {
    return str.split(' ').reverse().join(' ').split('').reverse().join('')
}

console.log(reverseWords("Hello World"));          //  "olleH dlroW"
console.log(reverseWords("TechGlobal"));           //  "labolGhceT"
console.log(reverseWords("Basketball is fun"));    //  "llabteksaB si nuf"
console.log(reverseWords(""));                     //  ""
console.log(reverseWords("Apples 456"));           //  "selppA 654"

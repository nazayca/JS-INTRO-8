/*
Task-01

Write a function named toCamelCase() which takes a string as its argument 
and returns a new string in camelCase. Assume the string only contains letters 
and spaces

*/

const toCamelCase = (str) => {
    if (str.length < 2) return str;

    const words = str.trim().toLowerCase().split(' ');

    for (let i = 1; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1)
    }

    return words.join('');
};

// Examples
console.log(toCamelCase("first name"));       // "firstName"
console.log(toCamelCase("last     name"));     // "lastName"
console.log(toCamelCase("   ZIP CODE"));       // "zipCode"
console.log(toCamelCase("I Learn Java Script"));// "iLearnJavaScript"
console.log(toCamelCase("helloWorld"));        // "helloWorld"



/*
Task-02

Write a function named toSnakeCase() which takes a string as its argument 
and returns a new string in snake_case. Assume the string only contains letters 
and spaces
NOTE: In snake case words are separated by underscores (_) and are all 
lowercase.

*/

const toSnakeCase = (str) => {
    const words = str.split(' ').filter(s=>s)
    
    
    return words.join('-')
}



console.log(toSnakeCase("first name"));              // "first_name"
console.log(toSnakeCase("last    name"));            // "last_name"
console.log(toSnakeCase("    I love Java Script")); // "i_love_java_script"
console.log(toSnakeCase("already_snake_case"));     // "already_snake_case"
console.log(toSnakeCase("hello"));                   // "hello"


/*
Task-03

Write a function named alternatingCases() which takes a string argument and 
returns the string with alternating capitalization.
NOTE: The first letter should always be uppercase and non-letter characters are 
ignored.

*/

const alternatingCases = (str) => {
 return str.split('').map((c,i) => i % 2 === 0 ? c.toLowerCase() : c.toUpperCase()).join('')
}

console.log(alternatingCases("Hello"));           // "HeLlO"
console.log(alternatingCases("basketball"));      // "BaSkEtBaLl"
console.log(alternatingCases("Tech Global"));     // "TeCh GlObAl"
console.log(alternatingCases(""));                // ""
console.log(alternatingCases("123!@#aB"));        // "123!@#Ab"


/*
task-04

Write a function named isNeutral() that takes two strings comprised of + and 
-, and return a new string which shows how the two strings interact in the 
following way:
When positives and positives interact, they remain positive.
When negatives and negatives interact, they remain negative.
But when negatives and positives interact, they become neutral, and are 
shown as the number 0.
Note: The two strings will be the same length.

*/

const isNeutral = (str1, str2) => {

    let result = '';

    for (let i = 0; i < str1.length; i++) {
        const char1 = str1[i];
        const char2 = str2[i];

        if ((char1 === '+' && char2 === '+') || (char1 === '-' && char2 === '-')) {
            result += char1;
        } else {
            result += '0';
        }
    }

    return result;

}

console.log(isNeutral("-", "+"));        // Output: "0"
console.log(isNeutral("-+", "-+"));       // Output: "-+"
console.log(isNeutral("-++-", "-+-+"));   // Output: "-+00"
console.log(isNeutral("--++--", "++--++"));// Output: "000000"
console.log(isNeutral("+++", "+++"));     // Output: "+++"


/*
task-05

Write a function named isTrueOrFalse() which takes a string with sets of character/words 
separated by space. Looking at the first letter of each word (case insensitive-"A" and "a" should 
be treated the same), you need to determine whether it falls into the positive/first half of the 
alphabet ("a"-"m") or the negative/second half ("n"-"z"). Return true if there are more (or 
equal) positive words than negative words, false otherwise.
NOTE: alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
NOTE: Ignore all the digits, spaces and special characters.
*/


const isTrueOrFalse = (str) => {
    str = str.toLowerCase()
}

console.log(isTrueOrFalse("A big brown fox caught a bad rabbit"));  // Output: true
console.log(isTrueOrFalse("Xylophones can obtain Xenon."));         // Output: false
console.log(isTrueOrFalse("CHOCOLATE MAKES A GREAT SNACK"));        // Output: true
console.log(isTrueOrFalse("All FOoD tAsTEs NIcE for someONe"));    // Output: true
console.log(isTrueOrFalse("Got stuck in the Traffic"));             // Output: false

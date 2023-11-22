//Task-1


function countPos(numbers) {
    let countP = 0;
    for (const num of numbers) {
        if (num > 0) {
            countP++
        }
    }
    return countP;
}
console.log(countPos([-45, 0, 0, 34, 5, 67]));
console.log(countPos([-23, -4, 0, 2, 5, 90, 123]));
console.log(countPos([0, -1, -2, -3]));

//Task-2

function countA(str) {
    let countA = 0;
    for (const letter of str) {
        if (letter.toLowerCase() === 'a') {
            countA++
        }
    }
    return countA
}
console.log(countA("TechGlobal is a QA bootcamp"));
console.log(countA("QA stands for Quality Assurance"));
console.log(countA("Cypress"));

/*function countA(string){
 let counter = 0;
 for(const char of string){
     if(char.toLowerCase().includes('a')){
      counter++
     }
 }
 return counter
}*/


//Task-3

function countVowels(str1) {
    let numberOfVowels = 0;
    for (const Vowel of str1) {
        if ('AEOUIaeoui'.includes(Vowel)) {
            numberOfVowels++
        }
    }
    return numberOfVowels;
}
console.log(countVowels("Hello"));
console.log(countVowels("Hello World"));
console.log(countVowels("JavaScript is fun"));
console.log(countVowels(""));

//Task-4

function countConsonants(str2) {
    let countLetter = 0;
    for (char of str2) {
        if (!'AEOUIaeoui'.includes(char)) {
            countLetter++;
        }
    }
    return countLetter
}
console.log(countConsonants("Hello"));
console.log(countConsonants("Hello World"));
console.log(countConsonants("JavaScript is fun"));
console.log(countConsonants(""));

/*function countConsonants(str2) {
    let countLetter = 0;
    for (char of str2) {
        if (!'AEOUIaeoui'.includes(char) && !' '.includes(char)) {
            countLetter++;
        }
    }
    return countLetter
} -------------> if you dont want to count spaces*/

//Task-5

function countWords(words) {
    return words.trim().split(' ').length;
}

console.log(countWords('      JavaScript is fun       '));
console.log(countWords("Cypress is an UI automation tool.    "));
console.log(countWords("1 2 3 4"));

//Task-6
function factorial(num) {
    let factorialNum = 1;
    for (i = num; i >= 2; i--) {
        factorialNum *= i;
    }
    return factorialNum;
}
console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(0));
console.log(factorial(1));

//Task-7

function isPalindrome(word) {
    if (word.toLowerCase() === word.toLowerCase().split('').reverse().join('')) return true;
    else return false;
}

console.log(isPalindrome("Hello"));
console.log(isPalindrome("Kayak"));
console.log(isPalindrome("civic"));
console.log(isPalindrome("abba"));
console.log(isPalindrome("abba"));
console.log(isPalindrome("ab a"));
console.log(isPalindrome("123454321"));
console.log(isPalindrome("A"));
console.log(isPalindrome(""));

//Task-8

function countMultipleWords(arr) {
    let multipleWords = 0;

    for (const element of arr) {
        if (element.trim().includes(' ')) {
            multipleWords++
        }
    }
    return multipleWords;
}

console.log(countMultipleWords(["foo", "", "    ", "foo bar", "     foo"]));
console.log(countMultipleWords(["foo", "bar", "foobar", "     foobar   "]));
console.log(countMultipleWords(["f o o", "b a r", "foo bar", "     foo bar   "]));
console.log(countMultipleWords([]));

//Task-9

function count3orLess(str4) {
    let count3orLess = 0;
    let str4AsArr = str4.trim().split(' ')
    for (element of str4AsArr) {
        if (element === "") return 0
        if (element.length <= 3) count3orLess++

    }
    return count3orLess;
}


console.log(count3orLess("Hello"));
console.log(count3orLess("Hi John"));
console.log(count3orLess("JavaScript is fun"));
console.log(count3orLess("My name is Jhon Doe"));
console.log(count3orLess(""));

//Task-10
function isPrime(number) {
    if (number <= 1) return false
    for (i = 2; i < number.length; i++) {
        if (number % i === 0) {
            return false
        }
    }
    return true
}


console.log(isPrime(5))
console.log(isPrime(2))
console.log(isPrime(29))
console.log(isPrime(-5))
console.log(isPrime(0))
console.log(isPrime(1))

//Task-11

function add(arr1, arr2) {

    let newArr = [];
    for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
        newArr[i] = (arr1[i] || 0) + (arr2[i] || 0);
    }
    return newArr
};


console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2]))
console.log(add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]))
console.log(add([-5, 6, -3, 11], [5, -6, 3, -11]))


//Task-12
function removeExtraSpaces(str) {
    return str.split(' ').filter(s => s).join(' ')
}


console.log(removeExtraSpaces("        Hello World     "));
console.log(removeExtraSpaces("Hello"));
console.log(removeExtraSpaces('      JavaScript is       fun'));
console.log(removeExtraSpaces(''));


//Task-13
function findClosestTo10(arr5) {
    let closestTo10 = 0;

    for (i = 1; i < arr5.length; i++) {
        if (Math.abs(arr5[i] - 10) < Math.abs(closestTo10 - 10)) {
            closestTo10 = arr5[i]
        }

    }
    return closestTo10
}



console.log(findClosestTo10([10, -13, 5, 70, 15, 57])); // Output: 5
console.log(findClosestTo10([10, -13, 8, 12, 15, -20])); // Output: 8
console.log(findClosestTo10([0, -1, -2])); // Output: 0




//Task-14



console.log(isEmailValid(""))
console.log(isEmailValid("@gmail.com"))
console.log(isEmailValid("johndoe@yahoo"))
console.log(isEmailValid("johndoe@.com"))
console.log(isEmailValid("a@outlook.com"))
console.log(isEmailValid("johndoe@a.com"))
console.log(isEmailValid("johndoe@@gmail.com"))
console.log(isEmailValid("johndoe@gmail.com"))



//Task-15

function isPasswordValid(password) {
    if(password.includes(' ')) return false
    if (password.length >16 || password.length <8) return false
    if (!'abcdefghijklmnoprstuvyzxwq'.includes(password)
    || !'0123456789'.includes(password) 
    || !"!@#$^&*(),.?:{}|[]~`<>'".includes(password) 
    || !'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.includes(password)) return false
       
       
     else return true
}

console.log(isPasswordValid(""))
console.log(isPasswordValid("abcd"))
console.log(isPasswordValid("abcd1234"))
console.log(isPasswordValid("Abcd1234"))
console.log(isPasswordValid("Chicago12345US!#$%"))
console.log(isPasswordValid("Abcd1234$"))
console.log(isPasswordValid("Chicago123$"))
console.log(isPasswordValid("Test1234#"))
console.log(isPasswordValid("Test1234#"))





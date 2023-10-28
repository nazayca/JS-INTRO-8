/*
Write a function called isPositive that takes an argument and returns true if the arg is positive, and false otherwise.

isPositive(5)   -> true
isPositive(0)   -> false
isPositive(-7)   -> false
isPositive(15)   -> true
isPositive(123)   -> true

Positive numbers are the numbers greater than zero
Negative numbers are the numbers less than zero
Zero is not a negative or a positive number, it is neutral

Positive: number > 0
Negative: number < 0
Neutral: number === 0
*/

function isPositive(arg) {
    return arg > 0;
}

console.log(isPositive(5)); // true
console.log(isPositive(17)); // true
console.log(isPositive(150)); // true
console.log(isPositive(0)); // false
console.log(isPositive(-15)); // false

function isNegative(arg2){
    return arg2<0;
}
    console.log(isNegative(5));
    console.log(isNegative(0));
    console.log(isNegative(-7));
    console.log(isNegative(15));
    console.log(isNegative(123));

    function getFirstChar(str){
        return str[0];
    }
    let word1 = "Hello";
    console.log(getFirstChar(word1));
    console.log(getFirstChar('1234'));
    console.log(getFirstChar('JavaScript'));
    console.log(getFirstChar(''));
    console.log(getFirstChar('   '));

    //

    function getFirstLastChar(str){
        return str[0] + str[str.length-1];

    
    }
    console.log(getFirstLastChar('Hello'));
    console.log(getFirstLastChar('1234'));
    console.log(getFirstLastChar('JavaScript'));
    console.log(getFirstLastChar(''));
    console.log(getFirstLastChar('   '));


    //


    function average5(a1,a2,a3,a4,a5){
        return (a1+a2+a3+a4+a5)/5;
    }
    console.log(average5(1, 2,3, 4, 5));
    console.log(average5(3, 7, 10, 5, 5));

    function a(){
        console.log('This function is a runig...');
    }
    //invoking the function a
    a();

    (function(){
        console.log('This is IIFE function running..')
    })();

    function getRandomNumber(num1,num2){
        const  min = Math.min(num1, num2);
        const max = Math.max (num1,num2);
       return (Math.floor(Math.random()*(max-min+1)+min));
    }
    
    console.log(getRandomNumber(5,10));
    console.log(getRandomNumber(15,17));
    console.log(getRandomNumber(8,5));
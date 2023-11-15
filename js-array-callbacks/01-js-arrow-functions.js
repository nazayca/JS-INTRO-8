/*
Write a function called product which takes 2 numbers and returns their product

product(3, 5)   -> 15
product(2, 0)   -> 0
product(4, 3)   -> 12
*/

// Regular syntax
function product1(num1, num2) {
    return (num1 * num2)
}


//function expression
const product2 = function (num1, num2) {
    return num1 * num2;
};


// arrow function
const product3 = (num1, num2) => num1 * num2;
console.log(product1(2,3))//6
console.log(product2(2,3))//6
console.log(product3(2,3))//6

// write a function as greeting that out puts 'Hello'

const greeting1 = function(){
    console.log("hello")
};

const greeting2 (){
    console.log('Hello')
}

const greeting3 =()=>console.log('Hello');

////
/*
Write a function named as fizzBuzz that takes one number argument and
Outputs 'Fizz' if the number is divisible by 3
Outputs 'Buzz' if the number is divisible by 5
Outputs 'FizzBuzz' if the number is divisible by both 3 and 5
Outputs the number itself if it is not divisible by both 3 and 5

fizzBuzz(3)         -> 'Fizz'
fizzBuzz(10)        -> 'Buzz'
fizzBuzz(45)        -> 'FizzBuzz'
fizzBuzz(2)         -> '2'
*/


// Regular function syntax
function fizzBuzz1(number) {
    if(number % 15 === 0) console.log('FizzBuzz');
    else if(number % 3 === 0) console.log('Fizz');
    else if(number % 5 === 0) console.log('Buzz');
    else console.log(number);
}


const fizzBuzz2 = function(number){
    if(number % 15 === 0) console.log('FizzBuzz');
    else if(number % 3 === 0) console.log('Fizz');
    else if(number % 5 === 0) console.log('Buzz');
    else console.log(number);

};

const fizzBuzz3 = number =>{


    if(number % 15 === 0) console.log('FizzBuzz');
    else if(number % 3 === 0) console.log('Fizz');
    else if(number % 5 === 0) console.log('Buzz');
    else console.log(number);
};




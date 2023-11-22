//write a funtion that takes a string name and losg"hello{name}
// greet('Alex)
//greet('Jane')   -> Hello Jane

function greet(name = 'NoName') {
    console.log(`Hello, ${name}!`);
}

greet('Alex');
greet()
function multiply(num1, num2 = 1) {
    console.log(num1 * num2)
}
multiply(3, 5)
multiply(3)

function sum(num1 = 0, num2 = 0, num3 = 0) {
    console.log(num1 + num2 + num3)
}
sum(1, 2, 3)
sum(3, 5)
sum(4)
sum()

/*
Write a function that takes 2 arguments
    First argument is a number
    Second argument is a number
    Third argument is a boolean

Function name is addOrSubtract
If the boolean is true, add the given numbers
If the boolean is false, subtract the given numbers
If the boolean is not provided, still add the numbers 

addOrSubtract(2, 3, true)       -> 5
addOrSubtract(10, 4, false)     -> 6
addOrSubtract(7, 8)             -> 15

*/

function addOrSubtract( num1, num2, isAddition = true){
    if(isAddition) console.log(num1+num2)
    else console.log(num1-num2)

    }

addOrSubtract(2,3,true)
addOrSubtract(10, 4, false) 
addOrSubtract(7, 8)  

const addOrSubtract2 = (num1,num2, isAddition=true)=>isAddition ? console.log(num1+num2):console.log(num1-num2)function addOrSubtract(num1, num2, flag = true) {
    if(flag) console.log(num1 + num2);
    else console.log(num1 - num2);
}

// Ternary and arrow function way
// const addOrSubtract = (num1, num2, flag = true) => flag ? console.log(num1 + num2) : console.log(num1 - num2);

addOrSubtract(2, 3, true); //       -> 5
addOrSubtract(10, 4, false); //     -> 6
addOrSubtract(7, 8); //             -> 15
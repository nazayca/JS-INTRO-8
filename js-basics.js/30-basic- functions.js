// Kick off
function kickOff () {
    console.log('Start the meeting');
    console.log('Create a file');
    console.log('Start coding');
}

kickOff();
kickOff();
kickOff();


// Create a function that outputs 'Good Morning'
function greet() {
    console.log('Good Morning');
}

greet();
greet();
greet();
greet();
greet();


// FUNCTIONS WITH ARGUMENTS
// Create a function that takes an argument name and says 'Hello name'
// sayHello('Hana')     -> 'Hello Hana'
// sayHello('Dylan')    -> 'Hello Dylan'

sayHello('John'); // 'Hello John'
sayHello('Alex'); // 'Hello Alex'
sayHello('Suzanne'); // 'Hello Suzanne'

function sayHello(name) {
    console.log(`Hello ${name}`);
}


// RETURN TYPE FUNCTIONS
// Write a function that takes 2 arguments and returns their sum

function sum(a, b) {
    return a + b;
}

let result1 = sum(3, 5); // 8 - you can capture the sum in a new variable
console.log(result1); // 8

console.log(sum(1, 2) * 10); // 30



// Write a function that takes 3 arguments and returns their product
// product(1, 2, 3)     -> 6
// product(3, 7, 10)     -> 210

function product(arg1, arg2, arg3) {
    return arg1 * arg2 * arg3;
}

let v1 = product(1, 2, 3); // returning 6
console.log(v1); // 6

console.log(product(3, 7, 10)); // returning 210
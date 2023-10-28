/*
English exam
Passing score is 60 or above

We will write a program to check if we pass the exam or failed.

60 or above -> PASS
else -> FAIL

*/

let english_exam_score = 59; // any value between 0 and 100

// One way of solution
if(english_exam_score >= 60) { 
    console.log('PASS');
}
else {
    console.log('FAIL');
}

// Another way of solution
if(english_exam_score < 60) {
    console.log('FAIL');
}
else {
    console.log('PASS');
}


/*
Retirement age is 65

We will write a program to check if we can be retired or not.

age is greater than or equal 65 -> YOU CAN GET RETIRED
else -> YOU CANNOT GET RETIRED!!!

*/

let age = 65; 

if(age >= 65) {
    console.log('YOU CAN GET RETIRED');
}
else {
    console.log('YOU CANNOT GET RETIRED');
}

// Another way
if(age < 65) {
    console.log('YOU CANNOT GET RETIRED');
}
else {
    console.log('YOU CAN GET RETIRED');
}


/*
You will be given a number

We will write a program to check if the number is even or odd.

If the number is even -> EVEN
else ODD


*/

let number = Math.floor(Math.random() * 10); // 0 to 9 both inclusive

console.log(`The random number is ${number}.`);

if(number % 2 === 0) {
    console.log('EVEN');
}
else {
    console.log('ODD');
}

if(number % 2 !== 0) {
    console.log('ODD');
}
else {
    console.log('EVEN');
}


/*
Generate a random number between 0 and 1 (both inclusive)
Print "The number is ZERO" if the generated number is zero
Print "The number is ONE" if the generated number is one
*/

let num = Math.floor(Math.random() * 2);

console.log(`The random number is ${num}.`);

if(num === 0) {
    console.log('The number is ZERO');
}
else {
    console.log('The number is ONE');
}

// Other way 
if(num === 1) {
    console.log('The number is ONE');
}
else {
    console.log('The number is ZERO');
}

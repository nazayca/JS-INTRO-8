// Function scope was introduced before ES6
// It is similar to Block Scope but with one difference. The difference is var keyword acts exactly same as let and const
// Function Scope
function anyFunction() {
    var x = 10;
    let y = 11;
    const z = 12;
    console.log(x); // 10
    console.log(y); // 11
    console.log(z); // 12
}
console.log(x); // ReferenceError: x is not defined
console.log(y); // ReferenceError: y is not defined
console.log(z); // ReferenceError: z is not defined
// Real example
/*
Write a function that takes an array and returns how many numbers are even
countEven([1, 2, 3, 4, 5])  -> 2
countEven([0, 0, 0, 0, 0])  -> 5
*/
function countEven(arr) {
    let counter = 0;
    for(const number of arr) {
        if(number % 2 === 0) counter++;
    }
    return counter;
}
console.log(counter); // Error - ReferenceError: counter is not defined - It would give error for var and const as well
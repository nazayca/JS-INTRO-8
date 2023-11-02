let i = 1;

while(i <= 5) {
    console.log(i);
    i++;
}

console.log('The rest of the program!');

// Count all the even numbers between 1 and 10 (both inclusive) -> 5

// for loop version of solution
let countEven = 0;

for(let j = 1; j <= 10; j++) {
    if(j % 2 === 0) countEven++;
}

console.log(countEven);

// while loop version of solution

let j = 1;
let countE = 0;

while(j <= 10) {
    if(j % 2 === 0) countE++;
    j++;
}

console.log(countE);



// Infinite loop
while(1 <= 2) {
    console.log(1);
}

// Infinite loop
while(true) {
    console.log('Hello World');
}
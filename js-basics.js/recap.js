/*
Find if sum of 2 random numbers is even or not.

Write a program that generates 2 random numbers between 1 and 10 (both inclusive).
If the sum of the random numbers is even, print true.
Otherwise, print false.
*/

/*
Find if sum of 2 random numbers is even or not.

Write a program that generates 2 random numbers between 1 and 10 (both inclusive).
If the sum of the random numbers is even, print true.
Otherwise, print false.

PSEDUO CODE - APPROACH
1. Generate 2 random numbers between 1 and 10
2. Find their sum
3. Check if the sum is even or not
    if sum is even, print true
    else print false
*/

const num1 = Math.floor(Math.random() * 10) + 1; 
const num2 = Math.floor(Math.random() * 10) + 1; 

const sum = num1 + num2;

if(sum % 2 === 0) console.log(true);
else console.log(false);

// We can simplify this if-else
console.log(((Math.floor(Math.random() * 10) + 1) + (Math.floor(Math.random() * 10) + 1)) % 2 === 0);

for ( let i = 0; i<5;i++){
   console.log( "Hello World")
};

for (let i = 1; i<=5; i++){
    if(i % 2 !==0) console.log("Hello World")
}
 for (let i = 5; i>=1; i--){
    if(i % 2 !==0) console.log("Hello World",)
 }
for (let i = 0; i<8; i++){
    if( i %2===0) console.log('Hi Ayca',i);
}

const colours =['Red', 'Blue', 'Yellow', 'Purple','Orange'];

let colour = 0;
 while (colour < colours.length){
    console.log(`${colours[colour]}`);
    colour++
 }



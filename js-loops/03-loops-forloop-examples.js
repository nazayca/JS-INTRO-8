/*
Output each character from TechGlobal -> 
T
e 
c 
h 
G 
l 
o 
b 
a 
l  
*/

let school = 'TechGlobal'; 

for(let i = 0; i <= school.length-1; i++) {
    console.log(school[i]);
}

// Count how many 'l' letters you have in the TechGlobal    -> 2

let counterL = 0;

for(let i = 0; i <= school.length-1; i++) { // counterL = 2    i = 10  l
    if(school[i] === 'l') counterL++;
}

console.log(`We have ${counterL} times 'l' letter in '${school}'.`);


let str = 'APPLE Pineapple'; 

// Count 'p' but ignore cases -> 5

let countP = 0;

for(let i = 0; i < str.length; i++) {
    if(str[i].toLowerCase() === 'p') countP++;
    
}

console.log(countP);



/*
Write a program that outputs numbers from 1 to 30 (both inclusive)
        If number is divided by 3, then output "Fizz" instead of number
        if number is divided by 5, then output "Buzz" instead pf number
        if number is divided by both 3 and 5, then output "FizzBuzz"
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
.
29
FizzBuzz
*/

for(let i = 1; i <= 30; i++) {
    if(i % 15 === 0) console.log('FizzBuzz');
    else if(i % 3 === 0) console.log('Fizz');
    else if(i % 5 === 0) console.log('Buzz');
    else console.log(i);
}
/*
Game club

People who has a name starting with J can be part of this Game club

John -> 'You can join the club'
Alex -> 'SORRY! You are out'
*/

let name = 'jane';

if(name.toUpperCase()[0] === 'J') {
    console.log('You can join the club');
}
else {
    console.log('SORRY! You are out');
}


// Short if-else - could be used
if(name.toUpperCase()[0] === 'J') console.log('You can join the club');
else console.log('SORRY! You are out');


// Ternary solution
let result = name.toUpperCase()[0] === 'J' ? 'You can join the club' : 'SORRY! You are out';
console.log(result);

// Without storing in a variable
console.log(name.toUpperCase()[0] === 'J' ? 'You can join the club' : 'SORRY! You are out');

// Another ternary way
name[0] === 'J' || name[0] === 'j' ? console.log('You can join the club') : console.log('SORRY! You are out');


/*
Naming a baby

boy = Sam
girl = Julie 

Girl = F
Boy = M
*/

let gender = 'M'; // will be either F or M

//let baby_name = gender === 'F' ? 'Julie' : 'Sam';
let baby_name = gender === 'M' ? 'Sam' : 'Julie';

console.log(baby_name); // Sam

// Do not store the result in a variable and execute code right away from the ternary - closest to if else
gender === 'M' ? console.log('Sam') : console.log('Julie');

if(gender === 'M') console.log('Sam');
else console.log('Julie');

// Havind ternary result in the console.log()
console.log(gender === 'M' ? 'Sam' : 'Julie');



// Ternary instead of ladder statements
/*
Assume you are given a number and will print
POSITIVE if the number is greater than zero
NEGATIVE if the number is smaller than zero
ZERO if the number is zero
*/

let num = Math.floor(Math.random() * 11) - 5; // this returns a random number bt -5 and 5

console.log(`The random number is = ${num}.`);

if(num > 0) console.log('POSITIVE');
else if(num < 0) console.log('NEGATIVE');
else console.log('ZERO');

// Without storing in a container - variable
num > 0 ? console.log('POSITIVE') : num < 0 ? console.log('NEGATIVE') : console.log('ZERO');


// Storing result in a variable and then printing it out
let result_pnz = num > 0 ? 'POSITIVE' : num < 0 ? 'NEGATIVE' : 'ZERO';

console.log(result_pnz); 
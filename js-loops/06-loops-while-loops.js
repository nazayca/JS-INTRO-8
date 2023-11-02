// Generate an even number bt 1 and 10 using Math.random()
// Calculate how many attempts it takes to generate it

let ran1; // global scope
let attempt = 0;

do {
    ran1 = Math.floor(Math.random() * 10) + 1; 
    console.log(ran1);
    attempt++;
} while (ran1 % 2 !== 0);

console.log(`The first even number generated is ${ran1} and it took ${attempt} time/s to generate it.`);


// Generate an random number bt 1 and 10 using Math.random()
// Calculate how many attempts it takes to generate number 7.

let ran2;
let counter = 0;

do {
    ran2 = Math.floor(Math.random() * 10) + 1;
    console.log(ran2);
    counter++;
} while(ran2 !== 7);

console.log(`The number is finally ${ran2} and it took ${counter} time/s to generate it.`);


// for or while loop solution
let attemptFor = 0;

while(true) { // for ( ; ; ) 
    let random = Math.floor(Math.random() * 10) + 1;
    console.log(random);
    attemptFor++;

    if(random === 7) break;
}

console.log(`The number is finally 7 and it took ${attemptFor} time/s to generate it.`);
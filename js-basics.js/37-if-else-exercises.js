/*
Generate a random number between -2 and 2 (both inclusive)
Print "The number is POSITIVE" if the generated number is positive
Print "The number is NEGATIVE" if the generated number is negative
Print "The number is ZERO" if the generated number is zero
*/

let ranNum = Math.floor(Math.random() * 5) - 2; 
console.log(`The random number is ${ranNum}`);

if(ranNum < 0) {
    console.log('The number is NEGATIVE');
}
else if (ranNum > 0) {
    console.log('The number is POSITIVE');
}
else { // all above conditions are false
    console.log('The number is ZERO');
}


if(ranNum > 0) {
    console.log('The number is POSITIVE');
}
else if (ranNum < 0) {
    console.log('The number is NEGATIVE');
}
else { // all above conditions are false
    console.log('The number is ZERO');
}

// Performance - this is not preferred
if(ranNum === 0) {
    console.log('The number is ZERO');
}
else if (ranNum < 0) {
    console.log('The number is NEGATIVE');
}
else { // all above conditions are false
    console.log('The number is POSITIVE');
} 


// Nested solutions for Positive-Negative and Zero
if(ranNum < 0) {
    console.log('The number is NEGATIVE');
}
else { // Not negative
    // positive or zero
    if(ranNum > 0) {
        console.log('The number is POSITIVE');
    }
    else {
        console.log('The number is ZERO');
    }
}

/*
Generate a random number between 1 and 12 (both inclusive) are considered as months
Print "Winter" if the generated number is 12, 1, or 2
Print "Spring" if the generated number is 3, 4, or 5
Print "Summer" if the generated number is 6, 7, 8
Print "Fall" if the generated number is 9, 10, 11
*/

let ranMonth = Math.floor(Math.random() * 12) + 1;  // 1 and 12
console.log(`The random number is ${ranMonth}`);

if(ranMonth === 6 || ranMonth === 7 || ranMonth === 8) {
    console.log('Summer');
}
else if(ranMonth === 12 || ranMonth === 1 || ranMonth === 2) {
    console.log('Winter');
}
else if(ranMonth === 9 || ranMonth === 10 || ranMonth === 11) {
    console.log('Fall');
}
else {
    console.log('Spring');
}


// Another better way
if(ranMonth >= 3 && ranMonth <= 5) { // 3-4-5
    console.log('Spring');
}
else if(ranMonth >= 6 && ranMonth <= 8) { // 6-7-8
    console.log('Summer');
}
else if(ranMonth >= 9 && ranMonth <= 11) { // 9-10-11
    console.log('Fall');
}
else {
    console.log('Winter');
}
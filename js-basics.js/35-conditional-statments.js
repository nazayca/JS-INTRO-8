// Teenage

let age = 5;

if(age >= 10 && age <= 19) { // this block will execute only if the condition is true
    console.log(`${age} is a teenage!`);
}
else { // this block will execute only if the condition is false
    console.log(`${age} is NOT a teenage!!!`);
}

console.log('End of the program!');


// Another example of if else 5

let number1 = 3, number2 = 1;

if(number1 > number2) { // number1 is greater
    console.log('This is if block running');
    console.log(`The absolute difference = ${number1 - number2}`);
}
else { // number 1 is not greater
    console.log('This is else block running');
    console.log(`The absolute difference = ${number2 - number1}`);
}

console.log('End of the program!');



let ranNum =Math.floor(Math.random()*5)-2;
console.log(`The random number is ${ranNum}`);
if (ranNum>0){
    console.log(`The random number is POSITIVE`)
}
else if (ranNum<0){
    console.log(`The random number is NEGATIVE`)
}
else{
    console.log("The random number is ZERO")
}
 
let ranMonth = Math.floor(Math.random()*(12-1+1)+1);
if(ranMonth ===12|| ranMonth ===1 || ranMonth===2){
console.log('Winter')
}
else if (ranMonth ===3|| ranMonth ===4 || ranMonth===5){
    console.log("Spring")
}
else if (ranMonth ===6|| ranMonth ===7 || ranMonth===8){
    console.log("Summer")

}
else{
    console.log("Fall")
};

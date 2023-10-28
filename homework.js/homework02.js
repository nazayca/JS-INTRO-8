//Task-1

let str = "5", str2 = "2";
console.log('The sum of 5 and 2 is =', Number(str) + Number(str2));
console.log('The product of 5 and 2 is =', Number(str) * Number(str2));
console.log('The division of 5 and 2 is =', Number(str) / Number(str2));
console.log('The subtraction of 5 and 2 is =', Number(str)-Number(str2));
console.log('The remainder of 5 and 2 is =', Number(str) % Number(str2));
console.log('The exponentiation of 5 and 2 is =', Number(str)** Number(str2));

//Task-2

let s1 = '200', s2 = '-50';
let max = Math.max(s1, s2);
let min = Math.min(s1, s2);
console.log('The greatest value is =', max);
console.log('The smallest value is =', min);
console.log('The avarege value is =', (Number(s1) + Number(s2))/2);
console.log('The absolute difference is =', Math.abs(s1 -s2));

//Task-3

const MaxNum = 50, MinNum = 1;
const random1 = Math.floor(Math.random()*(50-1+1)+1);
const random2 = Math.floor(Math.random()*(50-1+1)+1);
console.log('The absolute difference between numbers is =', Math.abs(random1 - random2));

//Task-4

const rndmNr1 = Math.floor(Math.random()* (50-1+1)+1);
const rndmNr2 = Math.floor(Math.random()* (50-1+1)+1);
const rndmNr3 = Math.floor(Math.random()* (50-1+1)+1);
const rndmNr4 = Math.floor(Math.random()* (50-1+1)+1);
const rndmNr5 = Math.floor(Math.random()* (50-1+1)+1);
console.log('The max value =', Math.max(rndmNr1, rndmNr2, rndmNr3, rndmNr4, rndmNr5));
console.log('The min value =', Math.min(rndmNr1, rndmNr2, rndmNr3, rndmNr4, rndmNr5));

//Task-5

const randomNum1 = Math.floor(Math.random()*(100-50+1)+50);
const randomNum2 = Math.floor(Math.random()* (100-50+1)+50);
const randomNum3 = Math.floor(Math.random()*(100-50+1)+50);
console.log(`The number 1 =  ${randomNum1}  
The number 2 = ${randomNum2} 
The number 3 = ${randomNum3}`);

console.log('The sum of number is =', randomNum1 + randomNum2 + randomNum3);

//Task-6
const rndNr1 = Math.floor(Math.random()*(100-1+1)+1);
const rndNr2 = Math.floor(Math.random()*(100-1+1)+1);
const rndNr3 = Math.floor(Math.random()*(100-1+1)+1);
console.log(rndNr1>25 && rndNr2>25 && rndNr3>25);
 //Task-7

 let name = 'David';
 console.log('The length of the name is = ', name.length);
 console.log('The first character in the name is =', name[0]);
 console.log('The last character in the name is = ', name[name.length-1]);
 console.log('The first 3 characters in the name are =', name.slice(0,3));
 console.log('The last 3 characters in the name are =' , name.slice(2));
console.log(`The middlecharacter is = ${name.slice(3)}`)

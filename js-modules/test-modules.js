const {getRandomNumber, average, sum} = require('./mathUtils'); // that is like import statement

/*
Generate 2 random numbers bt 1 and 10 inclusive.
Find their average
*/
const r1 = getRandomNumber(1, 10);
const r2 = getRandomNumber(1, 10);

console.log(r1, r2);

console.log(sum(r1, r2));
console.log(average(r1, r2)); // 
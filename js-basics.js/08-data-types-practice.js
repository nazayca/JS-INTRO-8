/*
Create different variables to store below information

address = 'Chicago, IL'
age = 25
isWeatherNiceToday = true
price = 10.25

Print all the variables above with proper messages
Find and output all the variables types using typeof
*/

let adress = 'Chicago,IL', age = 25, isWeatherNiceToday =true, price = 10.25;

console.log('The adress is = ' + adress);
console.log('The age is = ' + age);
console.log(' The weather is nice = ' + true);
console.log('The price is = ' + 10.25);

console.log(typeof adress);
console.log(typeof age);
console.log(typeof isWeatherNiceToday);
console.log(typeof price);

//TRICKY QUESTION
console.log(typeof undefined); // undefined
console.log(typeof null); // object
console.log(typeof 25); // number
console.log(typeof '1234'); //strings
console.log(typeof 'undefined'); //strings

//BE CAREFULL
let name = 'Max';
console.log('The name is = ' + name); // hard-code and not dynamic
console.log(typeof name);

// 

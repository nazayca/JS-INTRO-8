// EXTRACTING PARTIAL STRINGS

// One character -> [] 
// Partial string -> one or more characters -> slice(), substring 

let sentence = 'I like JavaScript';

// slice() 
console.log(sentence.slice(7)); // 'JavaScript'
console.log(sentence.slice(2, 6)); // 'like'

// Script
console.log(sentence.slice(11)); // 'Script'

// Java
console.log(sentence.slice(7, 11)); // 'Java'


// substring()
console.log(sentence.substring(7)); // 'JavaScript'
console.log(sentence.substring(2, 6)); // 'like'
console.log(sentence.substring(11)); // 'Script'
console.log(sentence.substring(7, 11)); // 'Java'


// slice() vs substring()
let name = 'Alexander';
console.log(name.substring(-5)); // 'Alexander'
console.log(name.slice(-5)); // 'ander'

console.log(name.substring(-5, -2)); // ''
console.log(name.slice(-5, -2)); // 'and'
console.log(name.slice(-2, -5)); // ''
console.log(name.slice(7, 4)); // ''


let city = 'Chicago';

// Retreieve and combine first 2 and last 2 characters of the city variable -> 'Chgo'
console.log(city.slice(0, 2) + city.slice(-2)); // 'Chgo'
console.log(city.slice(0, 2) + city.slice(city.length-2)); // 'Chgo'
console.log(city.substring(0, 2) + city.substring(city.length-2)); // 'Chgo'
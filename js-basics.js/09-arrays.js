// Memory wise not recomended - taking a lot of time and effort and lots of lines of code
// let sudent1 = 'Atilla';
// let sudent2 = 'Ada';
// let sudent3 = 'Tolgonai;
// let sudent4 = 'Zaid;
// let sudent5 = 'Ayca';
// let sudent6 = 'Hana;

// Collections-arrays are used to store multiple information of same type usually
const students = [ 'John', 'Max', 'Jane', 'Alex', 'Alice' ];
//const students2 = new Array( 'John', 'Max', 'Alex'); //not prefered but we have to konw that 

// how to output the array elements 

console.log(students); // [ 'John', 'Max', 'Jane', 'Alex', 'Alice' ]

// how to access a single element within the array -> we use index of the element and property access []

console.log(students[2]); // Jane because it starts counting from 0
console.log(students[2]); // Jane
console.log(students[4]); // Alice
console.log(students[0]); // John


console.log(typeof students); // object


const numbers = [1, 2, 5, 7]
let numberAtIndexOf2 = numbers[2]; 

console.log(numberAtIndexOf2);//  5
console.log(typeof numberAtIndexOf2); // number
console.log(typeof numbers); // object 


// How to update an existing element - this is possible by using their indexes
console.log(numbers); // [ 1, 2, 5, 7 ]
numbers[0] = 25;
console.log(numbers); // [ 25, 2, 5, 7 ]

// How to check the size of the array = how many elements you have in the array
const cities = ['Berlin', 'Chicago',  'Toronto', 'Miami'];
console.log(cities.length);  //4

let size = cities.length;
console.log(size); // 4

// Berlin = 0 , Chicago = 1' Toronto = 2' Miami = 3
console.log(cities[3]); // Miami
console.log(cities[1]); // Chicago
console.log(cities[0]); // Berlin

console.log(typeof cities); // object

// TRICKY SIDE
console.log(cities[4]); //undefined
console.log(cities[-1]); //undefined
console.log(cities[-134875]); //undefined
console.log(cities[100]); //undefined








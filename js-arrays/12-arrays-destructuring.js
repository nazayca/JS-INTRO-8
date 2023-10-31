const top3Movies = [ 'Lord of The Rings', 'Rocky', 'Star Wars' ];

// const favMovie = top3Movies[0];
// const favSecondMovie = top3Movies[1];
// const favThirdMovie = top3Movies[2];

// Instead of above 3 lines, you can use destructuring array feature as below

const [ favMovie, favSecondMovie, favThirdMovie ] = top3Movies;

console.log(favMovie); // Lord of The Rings

console.log(`My favorite movie is '${favMovie}'.`); // My favorite movie is 'Lord of The Rings'.



const numbers = [ 1, 10, 2, 7, 13, 20 ];

// Destructure index of second, third, fourth numbers
const [ , second, third, fourth, , ] = numbers;

console.log(second); // 10
console.log(third); // 2
console.log(fourth); // 7


const credentials = [ 'johndoe', 'johndoe@gmail.com', 'Test1234$' ];

const [ , email, password ] = credentials;

console.log(email);
console.log(password);

if(password !== 'Test1234$') console.log('The password does not match!!');
else console.log('Password accepted!');
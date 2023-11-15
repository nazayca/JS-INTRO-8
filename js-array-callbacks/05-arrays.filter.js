const numbers = [-5, 0, 5, 10, 23, -10];
// Find all the positive numbers -> [5, 10, 23]

const positives = numbers.filter(number=>number>0)
console.log(positives)

console.log(numbers.filter(number=>number>0))


const odds = numbers.filter((number)=>number % 2 !==0)
const evens = numbers.filter((number)=>number % 2 === 0)

console.log(numbers.filter((number)=>number % 2 === 0))
console.log(numbers.filter((number)=>number % 2 !==0))


/// replace all the negative numbers with zero -> [0 ,0 ,5, 10, 23, 0];



const number2 = [0, 0, 5, 10, 23, 0];

const result =[]
for( const number of numbers){
    if(number<0)result.push(0)
    else result.push(number)
}

console.log(result)

console.log(numbers.map((number)=>number<0? 0 :number));


const fruits = ['Apple', 'Orange', 'Kiwi', 'Pineapple', 'Mango', 'Melon'];
// Find all the fruits that starts with M   -> [ 'Mango', 'Melon' ]
// Find all the fruits that has apple  -> [ 'Apple', 'Pineapple' ]
// Find all the fruits that has length of 5  -> [ 'Apple', 'Mango', 'Melon' ]
// Find all the fruits that has length different than 5  -> [ 'Orange', 'Kiwi', 'Pineapple' ]
// Find all the fruits that has a or e  -> [ 'Apple', 'Orange', 'Pineapple', 'Mango', 'Melon' ]

console.log(fruits.filter((fruit)=>fruit.toLowerCase().startsWith('m')))
console.log(fruits.filter((fruit)=> fruit.toLowerCase().includes('apple')))
console.log(fruits.filter(fruit=>fruit.length===5))
console.log(fruits.filter(fruit=>fruit.length!==5 ))
console.log(fruits.filter(fruit=>fruit.toLowerCase().includes('a') || fruit.toLowerCase().includes('e')))


// Count how many fruits has i  -> 2
console.log(fruits.filter(fruit => fruit.toLowerCase().indexOf('i') >= 0).length);

//Count how many fruits ends with e  -> 3
console.log(fruits.filter(fruit=>fruit.toLowerCase().endsWith('e')).length) 

// Store the first and last letters of the fruits as shown -> ['Ae', 'Oe', 'Ki', 'Pe', 'Mo', 'Mn']
console.log(fruits.map(fruit=>fruit.charAt(0)+ fruit.slice(-1))) 










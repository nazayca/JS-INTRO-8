const names = ['John', 'Jane', 'Alex', 'Max'];
//names.forEach(printName);

// function 
//function printName(name){
  //  console.log(name);
//}

//const printName = function(name){
 //   console.log(name)
//}
names.forEach((name)=>console.log(name));


// Print each name to the console
names.forEach(x => console.log(x));

// Output first letter of each name
names.forEach(name=>console.log(name.charAt(0))); // names.forEach(name=>console.log(name([o])))

// Output each name uppercased
names.forEach(name=>console.log(name.toUpperCase()));

//Output names that start with "J"
function printName(name){
    if(name[0]==='J')console.log(name);
}
//
names.forEach((name)=>{
    if(name[0]==='J')console.log(name)
});

// how many names letters equals to 4
let count4 = 0;
names.forEach((name)=>{
    if(name.length===4)count4++
})
console.log(count4);
//reduce fits this question better

const numbers = [5, 10,3,0,-2];
// Print each number

// Print true for even numbers and false for odd numbers -> false, true, false, true, true
numbers.forEach((x)=>console.log(x))

// Print each number multiplied by 5
numbers.forEach(x=>console.log(x*5))
  
// Print true for even numbers and false for odd numbers -> false, true, false, true, true
numbers.forEach((x)=>console.log((x%2===0)?true: false))
numbers.forEach(number=>console.log(number%2===0));

//Create a new array that multiplies each of the numbers element by 3 -> [ 15, 30, 9, 0, -6 ]
let newArray = [];
numbers.forEach(number=> newArray.push(number*3))

console.log(newArray)

let newArr = numbers.map(number=>number*3);// another solution-->map method fits better
console.log(newArr)

console.log(numbers.map(number=>number*3));// map method solution

//creatve a new array storest even numbers
let evenArr = []
numbers.forEach(number=>{
if(number%2===0)evenArr.push(number)
});
console.log(evenArr)











// Global scope is introduced before ES6
//Globally declared arrary

const fruits = ['Apple', 'Orange', 'Kiwi', 'Pineapple', 'Mango', 'Melon'];

//print each element to console
for(const fruit of fruits){
    console.log(fruit)
}

// count how many elements has 'apple'
let countApple = 0;
for(const fruit of fruits){
   if(fruit.toLowerCase().includes('apple'))countApple++
}

console.log(countApple)

function print(){
    console.log(fruits)
}
print()
/////////////////////////

var x = 10
let y = 11
const z = 12
 console.log(x)
 console.log(y)
 console.log(z)

 // Acces them in a block
 {
 console.log(x)
 console.log(y)
 console.log(z)
 }

 //Acces them in a function- IIFE-immediat invoke
 (function random(){
 console.log(x)
 console.log(y)
 console.log(z)
 })();

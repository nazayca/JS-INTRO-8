// Task-1

for (let i = 0; i <= 100; i++) {
    if (i % 7 === 0) console.log(i);
}

//Task-2

for (let i = 1; i <= 50; i++) {
    if (i % 6 === 0) console.log(i)
}

//Task-3
for (let i = 100; i >= 50; i--) {
    if (i % 5 === 0) console.log(i)
}

//Task-4
for (let i = 0; i <= 7; i++) {
    console.log(`The aquare of ${i} is = ${i ** 2}`)
}

//Task-5
let sum = 0
for (let i = 1; i <= 10; i++) {
    sum += i
}
console.log(sum);

//Task-6
let ranNum = Math.ceil(Math.random() * 10);
let factorial = 1;
for (let i = Math.max(ranNum); i >= 1; i--) {
    factorial *= i
}
console.log(`${ranNum}! = ${factorial}`)



//Task-7
let rn;
let count = 0;
do {
    rn = Math.ceil(Math.random() * 100);
    count++
} while (rn % 5 !== 0)
console.log(`The random number is ${rn} and it took ${count} attemp/s to genrate it`);

//Task-8

const arr1 = ['Germany', 'Argentina', 'Ukrania', 'Romania']
console.log(arr1);
console.log(arr1.sort());

//Task-9
const arr2 = ['Scooby Doo', 'Snoopy', 'Blue', 'Pluto', 'Dino', 'Sparky'];
console.log(arr2);
console.log(arr2.includes('Pluto') ? true : false);


//Task-10

const cartoonCats = ['Garfield', 'Tom', 'Sylvester', 'Azrael']
console.log(cartoonCats.sort());
console.log(cartoonCats.includes('Garfield') && cartoonCats.includes('Felix') ? true : false);

//Task-11

const numbers = [10.5, 20.75, 70, 80, 15.75];
console.log(numbers);

for (const number of numbers) {
    console.log(number);
}

//Task-12 

const arr5 = ['Pen', 'notebook', 'Book', 'paper', 'bag', 'pencil', 'Ruler'];
console.log(arr5);

let counter1 = 0; counter2 = 0;
for (let i = 0; i < arr5.length; i++) {
    if (arr5[i].toLowerCase().startsWith('b') || arr5[i].toLowerCase().startsWith('p'))
        counter1++
    if (arr5[i].toLowerCase().includes('pen') || arr5[i].toLowerCase().includes('book'))
        counter2++

}
console.log(`Elements starting with 'B' or 'P' = ${counter1}`);
console.log(`Elements having 'book' or 'pen' = ${counter2}`);


// Task 13

const arr6 = [3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78];
console.log(arr6);

let counter3 = 0, counter4 = 0, counter5 = 0;
for (let i = 0; i < arr6.length; i++) {
    if (arr6[i] > 10) counter3++
    if (arr6[i] < 10) counter4++
    if (arr6[i] === 10) counter5++
}
console.log(`Elements are more than 10 = ${counter3}`)

console.log(`Elements are less than 10 = ${counter4}`)

console.log(`Elements that are 10 = ${counter5}`)

//Task-14

const firstArr = [5, 8, 13, 1, 2];
const secondArr = [59, 3, 67, 1, 0];
console.log("1st array is = ", firstArr);
console.log("2nd array is = ", secondArr);

const thirdArr = [];
for (let i = 0; i < firstArr.length; i++) {
    thirdArr.push(Math.max(firstArr[i], secondArr[i]));
}
console.log("3rd array is = ", thirdArr);

//Task-15
function firstDuplicate(arr1){
    for(let i = 0; i<arr1.length; i++){
        for(let j = i+1; j<arr1.length; j++){
            if(arr1[i]===arr1[j]){
               return arr1[i]
            }
          
        }
    }
   return -1;
}


console.log(firstDuplicate([3, 7, 10, 0, 3, 10]));
console.log(firstDuplicate([5, 7, 7, 0, 5, 10]))
console.log(firstDuplicate([5, '5', 3, 7, 4]))
console.log(firstDuplicate([123, 'abc', '123', 3, 'abc']))
console.log(firstDuplicate([1, 2, 3]))
console.log(firstDuplicate(['foo', 'abc', '123', 'bar']))

//Task-16

function getDuplicates(arr){
    let newArray = []

    for(let i=0; i<arr.length; i++){
        for(let j = i+1; j <arr.length; j++){
            if(arr[i]===arr[j]){
                newArray.push(arr[i])
            }
        }
    }
    return newArray
}

console.log(getDuplicates([0, -4, -7, 0, 5, 10, 45, -7, 0]));

console.log(getDuplicates([1, 2, 5, 0, 7]));
console.log(getDuplicates(['A', 'foo', '12', 12, 'bar', 'a', 'a', 'foo']));
console.log(getDuplicates(['foo', '12', 12, 'bar', 'a']));

//Task-17

function reverseStringWords(str){
  if(str.length<=0){
    return str;
  }else return str.trim().split('').reverse().join('');
}
console.log(reverseStringWords("Hello World"));
console.log(reverseStringWords("I like JavaScript"));
console.log(reverseStringWords("Hello"));
console.log(reverseStringWords(""));
console.log(reverseStringWords(" "));

//Task-18

function getEvens(num1,num2){
    const evens = [];
    for(let i = Math.min(num1,num2);i<=Math.max(num1,num2);i++){
        if(i %2===0){
            evens.push(i)
        }
    }  
    return evens;   
} 

console.log(getEvens(2, 7) )
console.log(getEvens(17,5) )
console.log(getEvens(4, 4) )
console.log(getEvens(3, 3) )

//Task-19

function getMultipleOf5(nr1,nr2){
    const divided5 = [];
    for(let i = Math.max(nr1,nr2); i>=Math.min(nr1,nr2); i--){
     if(i%5===0){
        divided5.push(i)
     }
    }
    return divided5;
}
console.log(getMultipleOf5(3, 17));
console.log(getMultipleOf5(23, 5));
console.log(getMultipleOf5(5, 5));
console.log(getMultipleOf5(2, 4));

//Task-20

function fizzBuzz(x,y){
    let rslt = '';
    for(let i = Math.min(x,y); i<=Math.max(x,y);i++){
       if(i %15 === 0){
        rslt = rslt+'FizzBuzz'+'|'
       }else if(i % 5 ===0){
        rslt= rslt+'Buzz'+'|'
       }else if(i % 3 === 0 ){
        rslt= rslt+'Fizz'+'|'
       }else{
        rslt+= i+'|'
       }
    }
return rslt
}
  
   
console.log(fizzBuzz(13,18));
console.log(fizzBuzz(12,5));
console.log(fizzBuzz(5,5));
console.log(fizzBuzz(9,6));





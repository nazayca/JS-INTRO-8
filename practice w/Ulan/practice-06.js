/*
Requirement:
Write a function named as firstPos() which takes an array as an argument and returns the 
first positive element when invoked.
NOTE: Assume you will not be given an empty array, and it contains only number elements.
NOTE: Assume there is at least one positive element in the given array.
 
Examples:
firstPos([0, 3, -9,  5, 8]) 		-> 3
firstPos([-2, 0, -7, 10, -5]) 	    -> 10
firstPos([1, 2, 3, -2])             -> 1
*/

function firstPos(array) {
    for(const num of array) {
        if (num > 0 ) return num;
    }
}
console.log(firstPos([0, 3, -9,  5, 8]) )
console.log(firstPos([-2, 0, -7, 10, -5]) )
console.log(firstPos([1, 2, 3, -2]) )


/*
Requirement:
Write a function named as lastNeg() which takes an array as an argument and returns the last negative element when invoked.
NOTE: Assume you will not be given an empty array, and it contains only number elements.
NOTE: Assume there is at least one negative element in the given array.
 
Examples:
lastNeg([0, 3, -9,  5, 8]) 		    -> -9
lastNeg([-2, 0, -7, 10, -5]) 	    -> -5
lastNeg([1, 2, 3, -2])              -> -2
*/

function lastNeg(array) {
    for(i = array.length-1; i >= 0; i--) {
        if(array[i] < 0) return array[i];
    }
} 

function lastNeg(array){
    let lastNegativeNum = 0;
    for(const num of array){
        if(num<0)lastNegativeNum =num;

        

    }
    return lastNegativeNum
}
console.log(lastNeg([0, 3, -9,  5, -8]));

console.log(lastNeg([0, 3, -9,  5, 8]) )
console.log(lastNeg([-2, 0, -7, 10, -5]) )
console.log(lastNeg([1, 2, 3, -2]) )


/*Requirement:
Write a function named as firstLongest() which takes an array as an argument and returns 
the longest element when invoked.
NOTE: Assume you will not be given an empty array, and it contains only string elements.
NOTE: If there are 2 or more elements having the longest count of characters, always return the first occurrence.
 
Examples:
firstLongest(["red", "blue", "yellow", "white"]) 	-> "yellow"
firstLongest(["Apple", "Banana", "Orange"]) 	    -> "Banana"
firstLongest(["purple", "yellow", "orange"]) 	    -> "purple"*/

function firstLongest(array){
    let longWord = ''
    for(const word of array){
        if(word.length>longWord)
        longWord= word;
    }
    return
}
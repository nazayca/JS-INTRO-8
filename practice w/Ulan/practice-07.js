/*
Requirement:
Write a function named as max() which takes an array as an argument and returns the greatest element when invoked.
NOTE: Assume you will not be given an empty array, and it contains only number elements.
 
Examples:
max([0, 3, -9,  5, 8]) 	    -> 8
max([-2, 0, -7, 10, -5]) 	-> 10
max([1, 2, 3, -2])          -> 3
max([-5, -2])               -> -2
*/

function max(arr){
let maxNumber = -Infinity
    for( const num of arr){
      if(num > maxNumber){
       maxNumber =num
      }
      
    }
    return maxNumber
};

console.log(max([0, 3, -9,  5, 8]) )
console.log(max([-2, 0, -7, 10, -5]) )
console.log(max([1, 2, 3, -2]) )
console.log(max([-5, -2]))

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
    return longWord;
}

console.log(firstLongest(["red", "blue", "yellow", "white"]) );
console.log(firstLongest(["Apple", "Banana", "Orange"]) );
console.log(firstLongest(["purple", "yellow", "orange"]) );

/*equirement:
Write a function named as commonElements() which takes 2 arrays as arguments and 
returns all the matching elements from the both arrays when invoked.
NOTE: Assume you will not be given an empty array.
 
Examples:
commonElements([ 10, 20, 30, 50, 70 ], [ 20, 50, 70 ]) 	    -> [ 20, 50, 70 ] 
commonElements([ 30, 50, 70 ], [ 20, 100, 300 ]) 		    -> [ ] 
commonElements([ "30", "abc", "hi" ], [ 30, "Hi", "abc" ]) 	-> ["abc" ] */

function commonElements(arr1, arr2){
    const common = [];
    for(let i = 0; i < arr1.length; i++){
        if(arr2.includes(arr1[i])) common.push(arr1[i]);
    }
    return common;
}

function commonE(ar1, ar2){
    const commons = [];
    for(const num of ar1){
        if(ar2.includes(num))commons.push(num);
    }
    return commons
}

console.log(commonE([ 10, 20, 30, 50, 70 ], [ 20, 50, 70 ]))
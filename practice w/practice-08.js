/*
Requirement:
Write a function named as firstPos() which takes an array as an argument and returns the first positive element when invoked.
NOTE: Assume you will not be given an empty array, and it contains only number elements.
NOTE: Assume there is at least one positive element in the given array.
 
Examples:
firstPos([0, 3, -9,  5, 8]) 		-> 3
firstPos([-2, 0, -7, 10, -5]) 	    -> 10
firstPos([1, 2, 3, -2])             -> 1
*/

// 1
function firstPos(array) {
    for (const num of array) {
      if (num > 0) return num;
    }
  }
  
  // 2
  function firstPos(arr) {
    let i = 0;
    while (i < arr.length) {
      if (arr[i] > 0) {
        return arr[i];
      }
      i++;
    }
    //   for(let j=0; j < arr.length; i++) {
    //     if (arr[i] > 0) {
    //       return arr[i];
    //     }
    //   }
  }
  
  // 3
  console.log(Math.sign(1)); // 1
  console.log(Math.sign(-1)); // -1
  console.log(Math.sign(0)); // 0
  
  console.log(Math.sign(4)); // 1
  console.log(Math.sign(-4)); // -1
  console.log(Math.sign(0)); // 0
  
  function firstPos(array) {
    for (const num of array) {
      if (Math.sign(num) === 1) return num;
    }
  }
  
  console.log(firstPos([0, 3, -9, 5, 8]));
  console.log(firstPos([-2, 0, -7, 10, -5]));
  console.log(firstPos([1, 2, 3, -2]));
  
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
  
  // 1
  function lastNeg(array) {
    for (i = array.length - 1; i >= 0; i--) {
      if (array[i] < 0) return array[i];
    }
  }
  
  console.log(lastNeg([0, 3, -9, 5, 8])); // -9
  console.log(lastNeg([-2, 0, -7, 10, -5])); // -5
  console.log(lastNeg([1, 2, 3, -2])); // -2
  
  // 2
  function lastNeg(array) {
    let lastNegativeNum = -1;
    for (const num of array) {
      if (num < 0) lastNegativeNum = num; //
    }
    return lastNegativeNum;
  }
  
  console.log(lastNeg([0, 3, -9, 5, 8])); // -9
  console.log(lastNeg([-2, 0, -7, 10, -5])); // -5
  console.log(lastNeg([1, 2, 3, -2])); // -2
  
  // num = -2, lastNegativeNum = -2
  // return, break => -2
  // num = 0, lastNegativeNum = -2
  // num = -7, lastNegativeNum = -7
  // num = 10, lastNegativeNum = -7
  // num = -5, lastNegativeNum = -5
  
  // 3  - clean but not ideal
  function lastNeg(array) {
    for (const num of array.reverse()) {
      if (num < 0) return num; // -7
    }
    return lastNegativeNum;
  }
  
  // 4
  function lastNeg(array) {
    for (const num of array) {
      if (num < 0) negativeNums.push(num);
    }
    return negativeNums.pop();
    //   return negativeNums[negativeNums.length-1];
  }
  
  console.log(lastNeg([0, 3, -9, 5, 8])); // -9
  console.log(lastNeg([-2, 0, -7, 10, -5])); // -5
  console.log(lastNeg([1, 2, 3, -2])); // -2
  
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
  
  // 1
  function max(array) {
    // 1, 2, 3, -2
    let max = -Infinity;
  
    for (const number of array) {
      if (number > max) max = number;
    }
    return max;
  }
  
  // 2
  function max(arr) {
    return Math.max(...arr);
  }
  
  // 3
  function max(arr) {
    arr.sort((a, b) => a - b);
    return arr.pop();
  }
  
  /*
  Requirement:
  Write a function named as firstLongest() which takes an array as an argument and returns the longest element when invoked.
  NOTE: Assume you will not be given an empty array, and it contains only string elements.
  NOTE: If there are 2 or more elements having the longest count of characters, always return the first occurrence.
   
  Examples:
  firstLongest(["red", "blue", "yellow", "white"]) 	-> "yellow"
  firstLongest(["Apple", "Banana", "Orange"]) 	    -> "Banana"
  firstLongest(["purple", "yellow", "orange"]) 	    -> "purple"
  */
  
  function firstLongest(array) {
    let firstLongest = "";
    for (const str of array) {
      if (str.length > firstLongest.length) firstLongest = str;
    }
  
    return firstLongest;
  }
  
  /*
  Requirement:
  Write a function named as commonElements() which takes 2 arrays as arguments and 
  returns all the matching elements from the both arrays when invoked.
  NOTE: Assume you will not be given an empty array.
   
  Examples:
  commonElements([ 10, 20, 30, 50, 70 ], [ 20, 50, 70 ]) 	    -> [ 20, 50, 70 ] 
  commonElements([ 30, 50, 70 ], [ 20, 100, 300 ]) 		    -> [ ] 
  commonElements([ "30", "abc", "hi" ], [ 30, "Hi", "abc" ]) 	-> ["abc" ] 
  */
  
  // 1
  function commonElements(arr1, arr2) {
    const arrCommon = [];
  
    for (const number of arr2) {
      if (arr1.indexOf(number) >= 0) arrCommon.push(number);
    }
  
    return arrCommon;
  }
  
  // 2
  function commonElements(arr1, arr2) {
    const common = [];
  
    for (const num1 of arr1) {
      for (const num2 of arr2) {
        if (num1 === num2) {
          common.push(num1);
        }
      }
    }
    return common;
  }
  console.log(commonElements([10, 20, 30, 50, 70], [20, 50, 70]));
  console.log(commonElements([30, 50, 70], [20, 100, 300]));
  console.log(commonElements(["30", "abc", "hi"], [30, "Hi", "abc"]));
/*
Requirement:
-Create 2 arrays that stores numbers below.
First array-> 		[ 5, 8, 2, 1, 2 ]
Second array -> 	[ 9, 3, 5, 1, 0 ]

THEN:
-Output both arrays
–Then, create a new array that will multiply the numbers of the same indexes from the first 2 arrays 
and output the third array as well.

Third array->       [ 45, 24, 10, 1, 0, 6 ]
*/

const arr1 = [ 5, 8, 2, 1, 2 ];
const arr2 = [ 9, 3, 5, 1, 0 ];

const arr3 = [];

for(let i = 0; i <= arr1.length-1; i++) {
    arr3.push(arr1[i] * arr2[i]);
}

console.log(arr3);


/*
Please find the first even number from the below array
[-1, 1, 3, 0, 2, 6, 8] -> 0
*/

const nums = [-1, 1, 3, 0, 2, 6, 8];  

let firstEven; // undefined

for(const num of nums) {
    if(num % 2 === 0) {
        firstEven = num;
        break;
    }
}

console.log('First even', firstEven); 


// Find the first city that has the odd length  -> Chicago
const cities = ['Berlin', 'Rome', 'Chicago', 'Kiev', 'Istanbul', 'Tokyo'];

let firstOddLengthCity;

for(const city of cities) {
    if(city.length % 2 !== 0) {
        firstOddLengthCity = city;
        break;
    }
}

console.log('First odd length city:', firstOddLengthCity);

// Find all the cities that has length more than 5 -> [ 'Berlin', 'Chicago', 'Istanbul' ]
const cityWith6OrMore = [];

for(const city of cities) {
    if(city.length > 5) cityWith6OrMore.push(city);
}

console.log(cityWith6OrMore);

/*
Write a function that takes an array as an argument and returns all the 
elements that has length 6 or more
as an array.

length6orMore(['Berlin', 'Rome', 'Chicago', 'Kiev', 'Istanbul', 'Tokyo']) -> [ 'Berlin', 'Chicago', 'Istanbul' ]
length6orMore(['Hello', 'Morning']) -> [ 'Morning' ]
length6orMore(['Hello', 'World']) -> []
*/

function length6orMore(arr) {
    const newArr = [];
    for(const element of arr) {
        if (element.length > 5) newArr.push(element);
    }
    return newArr;
}

console.log(length6orMore(['Berlin', 'Rome', 'Chicago', 'Kiev', 'Istanbul', 'Tokyo']));
console.log(length6orMore(['Hello', 'Morning']));
console.log(length6orMore(['Hello', 'World']));
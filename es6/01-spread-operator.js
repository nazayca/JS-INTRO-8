const numbers = [1, 2, 3];

// create ne w array that sotres 1,2,3,4,5,6
const newArr = [1, 2, 3, 4, 5, 6]

//// create ne w array that sotres all the numbers of numbers array and,4,5,6
const newArr1 = [...numbers, 4, 5, 6]
console.log(newArr1)

const newArr2 = [4, ...numbers, 4, 5, 6]
console.log(newArr2)// 4, 1, 2, 3,4, 5, 6

// spread numbers to individual argument

console.log(Math.max(numbers[0], numbers[1], numbers[2]))
console.log(Math.max(...numbers))

// spread operators with objects

const table = {
    use: 'dining',
    metarial: 'wood'
};

const table2 = {
   ...table
}
const table3 = {
   ...table,
    isExtendable: true
}
const table4 = {
   ...table3,
    shape: 'round'
}



/*
write a function that takes any number argument and returns theri sum
sum()
sum(5)
sum(5,2)
sum(3,5,2)
sum(7,3,5,2)
sum(1,7,3,5,2)
*/
function sum(...args) {
    let sum = 0
    for (const num of args) {
        sum += num
    }
    return sum
}

console.log(sum(5))
sum(5, 2)
sum(3, 5, 2)
sum(7, 3, 5, 2)
sum(1, 7, 3, 5, 2)

const sum1 = (...args) => {
    return args.reduce((total, curr) => total + curr, 0)
}

console.log(sum1(5))
console.log(sum1(5, 2))
console.log(sum1(3, 5, 2))
console.log(sum1(7, 3, 5, 2))
console.log(sum1(1, 7, 3, 5, 2))

function product(num1 = 0, ...args) {
    let product = num1;
    for (const num of args) {
        product *= num
    }
    return product
}
console.log(product())
console.log(product(5))
console.log(product(5, 2, 3, 4))


// Regular function
function product(x, y) {
    return x * y;
}

console.log(product(3, 5)); // 15
console.log(product(3, 2)); // 6


// Currying way
function multiply(x) {
    return function (y) {
        return x * y;
    }
}


const doubled = multiply(2);
const tripled = multiply(3);

console.log(doubled(10)); // 20
console.log(doubled(7)); // 14
console.log(doubled(3)); // 6

console.log(tripled(10)); // 30
console.log(tripled(7)); // 21
console.log(tripled(3)); // 9



function mathLibrary(operation) {
    if(operation === '+') {
        return function(x, y) {
            return x + y;
        }
    }
    else if(operation === '*') {
        return function(x, y) {
            return x * y;
        }
    }
    else if(operation === '/') {
        return function(x, y) {
            return x / y;
        }
    }
    else if(operation === '-') {
        return function(x, y) {
            return x - y;
        }
    }
    else if(operation === '**') {
        return function(x, y) {
            return x ** y;
        }
    }
    else if(operation === '%') {
        return function(x, y) {
            return x % y;
        }
    }
}


const multiplication = mathLibrary('*');
const exponentiation = mathLibrary('**');
const division = mathLibrary('/');
const addition = mathLibrary('+');
const subtraction = mathLibrary('-');
const remainder = mathLibrary('%');


console.log(multiplication(3, 5)); // 15
console.log(addition(3, 5)); // 8
console.log(exponentiation(5, 3)); // 125

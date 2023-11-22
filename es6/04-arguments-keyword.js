// THIS IS NOT AN ES6 FEATURE

function combineStrings(str1, str2) {
    console.log(arguments.length);
    if(arguments[0] !== undefined && arguments[1] !== undefined) console.log(arguments[0] + arguments[1]);
    else console.error('The argument is not a string');
}

combineStrings('Java', 'Script'); // JavaScript
combineStrings('Java'); // Javaundefined
combineStrings(); // NaN


function product(num1, num2) {
    if(typeof arguments[0] === 'number' && typeof arguments[1] === 'number') console.log(num1 * num2);
    else console.log('At least one of the arguments is not a number');
}

product(3, 5);
product('abc', 'hello'); // NaN
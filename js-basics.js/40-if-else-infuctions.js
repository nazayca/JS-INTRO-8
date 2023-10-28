/*
Write function that takes a name and check if it starts with 'E' or 'e' and 
returns a boolean
Function name is startE.
NOTE: If the given name is empty -> then return false

startE('Emily') -> true
startE('emily') -> true 
startE('Alex') -> false 
startE('') -> false
*/

// Without function

function startE(str) {
    if(str.toLowerCase()[0] === 'e') return true;

    return false;
}

let b1 = startE('Emily');
console.log(b1);

console.log(startE('emily'));
console.log(startE('    '));
console.log(startE(''));
console.log(startE('Alex'));


/*
Write a function called fooBar which takes a number and return a string or a number.
if the given number is divisible by 5 -> return 'foo'
if the given number is divisible by 7 -> return 'bar'
if the given number is divisible both by 5 and 7 -> return 'foobar'
if the numbers is not divisible by 5 or 7 -> return the same number back

fooBar(2)   -> 2
fooBar(3)   -> 3
fooBar(5)   -> 'foo'
fooBar(10)  -> 'foo'
fooBar(14)  -> 'bar'
forBar(0)   -> 'foobar'
fooBar(35)  -> 'foobar'
fooBar(70)  -> 'foobar'
*/

function fooBar(num) { // 2
    if(num % 5 === 0 && num % 7 === 0) return 'foobar';
    else if(num % 5 === 0) return 'foo';
    else if(num % 7 === 0) return 'bar';

    return num;
}

console.log(fooBar(2)); // 2
console.log(fooBar(3)); // 3
console.log(fooBar(5)); // foo
console.log(fooBar(10)); // foo
console.log(fooBar(14)); // bar
console.log(fooBar(0)); // foobar
console.log(fooBar(35)); // foobar
console.log(fooBar(70)); // foobar


/*
Write a function called getGrade which takes a number as the score and return a letter as a grade
0-100

90-100          -> 'A'
80-89           -> 'B'
70-79           -> 'C'
60-69           -> 'D'
less than 60    -> 'F'

getGrade(90) -> 'A' 
getGrade(89) -> 'B' 
getGrade(80) -> 'B' 
getGrade(79) -> 'C' 
getGrade(70) -> 'C' 
getGrade(69) -> 'D' 
getGrade(60) -> 'D' 
getGrade(59) -> 'F' 

getGrade(95) -> 'A' 
getGrade(83) -> 'B' 
getGrade(23) -> 'F' 
getGrade(67) -> 'D'
*/ 

function getGrade(score) {
    if(score > 100 || score < 0) return 'INVALID INPUT!'; 

    if(score >= 90) return 'A';
    else if (score >= 80) return 'B';
    else if (score >= 70) return 'C';
    else if (score >= 60) return 'D';

    return 'F';
}

console.log(getGrade(-15)); // INVALID INPUT!
console.log(getGrade(200)); // INVALID INPUT!

/*
function getGrade(score) {

    if(score > 100 || score < 0) return 'INVALID INPUT!'; 

    if(score < 60) return 'F';
    else if (score < 70) return 'D';
    else if (score < 80) return 'C';
    else if (score < 90) return 'B';

    return 'A';
}
*/

console.log(getGrade(90));  // A
console.log(getGrade(89));  // B
console.log(getGrade(80));  // B
console.log(getGrade(79));  // C
console.log(getGrade(70));  // C
console.log(getGrade(69));  // D
console.log(getGrade(60));  // D
console.log(getGrade(59));  // F
console.log(getGrade(95));  // A
console.log(getGrade(83));  // B
console.log(getGrade(23));  // F
console.log(getGrade(67));  // D
/*
Find if sum of 2 random numbers is even or not.

Write a program that generates 2 random numbers between 1 and 10 (both inclusive).
If the sum of the random numbers is even, print true.
Otherwise, print false.

PSEDUO CODE - APPROACH
1. Generate 2 random numbers between 1 and 10
2. Find their sum
3. Check if the sum is even or not
    if sum is even, print true
    else print false
*/

const num1 = Math.floor(Math.random() * 10) + 1; 
const num2 = Math.floor(Math.random() * 10) + 1; 

const sum = num1 + num2;

if(sum % 2 === 0) console.log(true);
else console.log(false);

// We can simplify this if-else
console.log(((Math.floor(Math.random() * 10) + 1) + (Math.floor(Math.random() * 10) + 1)) % 2 === 0)
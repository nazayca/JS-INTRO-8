// 1.strings used to store text data
//strings can be stored in single or double quotes

let myName ='Jhon';
let myCity = 'Chicago';
let mySchool = 'TechGlobal';

console.log(myName); //Jhon
console.log (typeof myName);// string

let ssn = '000-00-000'; //string
let phonenumber = '(312)000-000'; // string

console.log (typeof ssn); //string
console.log(typeof phonenumber); //string

//2. numbers
//we store in veraibles without any single or double quotes
let age = 45 // number
console.log(typeof age); // number

let balance = 100.5; // decimal number
console.log(typeof balance); // number

// we can write write some message to clearly output our data to console
let fullName = 'John Doe';
let favNumber = 7;
let dailyExpense = 65.75;

console.log('The full name of the person is = ' + fullName); 
console.log('The favaroute number of the person is = ' + favNumber);
console.log('Daily expense of the person is = ' + dailyExpense);






//3.boolean
//it is used to store either true or false or an expression that evaluate treu or false

let isTodaySaturday = true;
let arestudentsInPerson = false;

let b1 = 5 >3; //true
let b2 = 5 * 2 == 10; //true
let b3 = 10 < 7; // false
let b4 = 5 >= 5; //true

console.log(isTodaySaturday);
console.log(b1);
console.log(b2);
console.log(b3);
console.log(b4);

console.log(typeof b3); // boolean
console.log(typeof isTodaySaturday); //boolean

//4. undefined when value is not initialized

let var1;
let var2 = undefined;

console.log(var1); //undefined
console.log(var2); //undefined

console.log(typeof var1); //undefined
console.log(typeof var2); //undefined
console.log(typeof undefined); //undefined



//5.null is used to state the variable does not point to any data or value
let var3 = null;
console.log(var3); //null
console.log(typeof var3); //object
console.log(typeof null); //object


//BigInteger
let number = 92345678912345678;
console.log(number); //923456789123456780 which is not correct

let number2 = 92345678912345678n;
console.log(number); //
console.log(typeof number2); //bigint

let number3 =BigInt ("92345678912345678");
console.log(number3); //2345678912345678n
console.log(typeof number3); //bigint

let maxSafeNumber = Number.MAX_SAFE_INTEGER;
let minSafeNumber = Number.MIN_SAFE_INTEGER;

console.log(maxSafeNumber); //9007199254740991
console.log(minSafeNumber); //-9007199254740991

















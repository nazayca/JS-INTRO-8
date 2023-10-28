/*
We will print the day based on the a random number
We will write a code that generates random number bt 0 and 6 both inclusive

0   -> Sunday
1   -> Monday
.
.
.
.
6   -> Saturday
*/

let day = 5; // 

// Student solution 1
// if (day === 0) console.log('Sunday');
// else if (day === 1) console.log('Monday');
// else if (day === 2) console.log('Tuesay');
// else if (day === 3) console.log('Wednesday');
// else if (day === 4) console.log('Thursday');
// else if (day === 5) console.log('Friday');
// else if (day === 6) console.log('Saturday');
// else throw new Error(`${day} does not represent any day in a week!!!`); // How you can create custom errors


// Switch instead if else
switch (day) { // your variable-value here 5
    case 0:
        console.log('Sunday');
        break;
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    default: // this is like else
        throw new Error(`${day} does not represent any day in a week!!!`);
}


/*
We will print the weekday or weekend based on the a number from 0 to 6

0   -> Weekend
6   -> Weekend
1   -> Weekday
.
.
.
5   -> Weekday
*/

let randomDay = 3;
if (randomDay === 0 || randomDay === 6) console.log('Weekend');
else console.log('Weekday');

// Do the same task with Switch
switch (randomDay) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('Weekday');
        break;
    default:
        console.log('Weekend');
}

switch (randomDay) {
    case 0:
    case 6:
        console.log('Weekend');
        break;
    default:
        console.log('Weekday');
}


// The best way to have switch for above example
switch (true) {
    case randomDay === 0 || randomDay === 6:
        console.log('Weekend');
        break;
    default:
        console.log('Weekday');
}



/*
We have an age and trying find the demography
0-20 (inclusive)    -> Young
21-55 (inclusive)   -> Adult
56+                 -> Senior
*/

let age = Math.floor(Math.random() * 100); // 0 and 99 inclusive
console.log(`The age randomly generated is = ${age}.`);

// if - else if - else ladder solution
if (age <= 20) console.log('Young');
else if (age <= 55) console.log('Adult');
else console.log('Senior');

// Ternary solution
console.log(age <= 20 ? 'Young' : age <= 55 ? 'Adult' : 'Senior');

// Switch solution
switch (true) {
    case age <= 20:
        console.log('Young');
        break;
    case age <= 55:
        console.log('Adult');
        break;
    default:
        console.log('Senior');
}
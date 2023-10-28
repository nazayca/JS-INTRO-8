
/*
QUESTION 1
Requirement:
Assume you are given a number between 1 and 100 (both 1 and 100 are included)
Find which quarter and half is number in
1st quarter is 1-25
2nd quarter is 26-50
3rd quarter is 51-75
4th quarter is 76-100
1st half is 1-50
2nd half is 51-100
----
Test data 1:
34
Expected result 1:
34 is in the 1st half
34 is in the 2nd quarter
----
Test data 2:
76
Expected result 2:
76 is in the 2nd half
76 is in the 4th quarter
*/

// SOLUTIONS FOR 1

const num = 76;
if (num < 51) console.log(`${num} is in the 1st half`);
else console.log(`${num} is in the 2nd half`);

if (num < 26) console.log(`${num} is in the 1st quarter`);
else if (num < 51) console.log(`${num} is in the 2nd quarter`);
else if (num < 76) console.log(`${num} is in the 3rd quarter`);
else console.log(`${num} is in the 4th quarter`);

// ternary operator

num < 76
  ? console.log(`${num} is in the 2nd half`)
  : console.log(`${num} is in the 2nd half`);
num < 51
  ? console.log(`${num} is in the 1st half`)
  : console.log(`${num} is in the 2nd half`);
num < 26
  ? console.log(`${num} is in the 1st quarter`)
  : num < 51
  ? console.log(`${num} is in the 2nd quarter`)
  : num < 76
  ? console.log(`${num} is in the 3rd quarter`)
  : console.log(`${num} is in the 4th quarter`);

console.log(
  num < 51 ? `${num} is in the 1st half` : `${num} is in the 2nd half`
);
console.log(
  num < 51 ? `${num} is in the 1st half` : `${num} is in the 2nd half`
);
num < 26
  ? console.log(`${num} is in the 1st quarter`)
  : num < 51
  ? console.log(`${num} is in the 2nd quarter`)
  : num < 76
  ? console.log(`${num} is in the 3rd quarter`)
  : console.log(`${num} is in the 4th quarter`);

switch (true) {
  case num < 51:
    console.log(`${num} is in the 1st half`);
    break;
  default:
    console.log(`${num} is in the 2nd half`);
}
switch (true) {
  case num < 26:
    console.log(`${num} is in the 1st quarter`);
    break;
  case num < 51:
    console.log(`${num} is in the 2nd quarter`);
    break;
  case num < 76:
    console.log(`${num} is in the 3rd quarter`);
    break;
  default:
    console.log(`${num} is in the 4th quarter`);
}

// 100 => 50 <
// ---
let num1 = 34;
let num2 = 76;

if (num1 < 51) {
  if (num1 < 26) {
    console.log(`${num1} is in the 1st half \n ${num1} is in the 1st quarter`);
  } else {
    console.log(`${num1} is in the 1st half \n ${num1} is in the 2nd quarter`);
  }
} else {
  if (num1 < 76) {
    console.log(
      `${num1} is in the 2nd half. \n ${num1} is in the 3rd quarter.`
    );
  } else {
    console.log(
      `${num1} is in the 2nd half. \n ${num1} is in the 4th quarter.`
    );
  }
}

if (num1 < 51) {
  console.log(`${num1} is in the 1st half`);
  if (num1 < 26) {
    console.log(`${num1} is in the 1st quarter`);
  } else {
    console.log(`${num1} is in the 2nd quarter`);
  }
} else {
  console.log(`${num1} is in the 2nd half.`);
  if (num1 < 76) {
    console.log(`${num1} is in the 3rd quarter.`);
  } else {
    console.log(`${num1} is in the 4th quarter.`);
  }
}
/*
QUESTION 2
Requirement:
Assume you are given 2 numbers to be 0 or 1.
Print true if they are same number.
Otherwise, print false
----
Test data 1:
0, 1
Expected result 1:
false
----
Test data 2:
0, 0
Expected result 2:
true
----
Test data 3:
1, 0
Expected result 3:
false
----
Test data 4:
1, 1
Expected result 4:
true
*/

// SOLUTIONS FOR 2
let num3 = 0;
let num4 = 1;

console.log(num3 === num4); // simple way

if (num3 === num4) {
  console.log(true);
} else {
  console.log(false);
}
// ---
num3 === num4 ? console.log(true) : console.log(false);

console.log(num3 === num4 ? true : false);

//
if ((num3 === 0 && num4 === 0) || (num3 === 1 && num4 === 1)) {
  console.log(true);
} else {
  console.log(false);
}
/*
QUESTION 3
Requirement:
Assume you are given 3 numbers between 1 and 100 (both 1 and 100 are included).
Print true if they are all even numbers.
Otherwise, print false
Test data 1:
2, 4, 6
Expected result 1:
true
Test data 2:
68, 44, 2
Expected result 2:
true
Test data 3:
10, 20, 25
Expected result 3:
false
Test data 4:
51, 67, 99
Expected result 4:
false
*/

let data1 = 2,
  data2 = 4,
  data3 = 9;
console.log(data1 % 2 === 0 && data2 % 2 === 0 && data3 % 2 === 0);

// ---

let number = 2,
  number2 = 4,
  number3 = 9;

if (number % 2 === 0 && number2 % 2 === 0 && number3 % 2 === 0)
  console.log(true);
else console.log(false);

number % 2 === 0 && number2 % 2 === 0 && number3 % 2 === 0
  ? console.log(true)
  : console.log(false);

switch (true) {
  case number % 2 === 0 && number2 % 2 === 0 && number3 % 2 === 0:
    console.log(true);
    break;
  default:
    console.log(false);
}

/*
QUESTION 4
Requirement:
Assume you are given a single character.
Find if the given character is a letter or digit.
Test data 1:
"v"
Expected result 1:
"v"  is a letter
Test data 2:
"5"
Expected result 2:
"5"  is a digit
*/

let char = "v";

if ("0123456789".includes(char)) {
  console.log("is digit");
} else {
  console.log("is letter");
}

// if code is between 48 and 57
let code = char.charCodeAt(0);

if (48 <= code && code <= 57) {
  console.log("is digit");
} else {
  console.log("is letter");
}

/*
QUESTION 5
Requirement:
Assume you are given a single character.
Find if the given character is a lowercase or an uppercase letter.
NOTE: if the character is not a letter, print "INVALID INPUT"
Test data 1:
"a"
Expected result 1:
"a"  is a lowercase letter
Test data 2:
"5"
Expected result 2:
"INVALID INPUT"
Test data 2:
"N"
Expected result 1:
"N"  is an uppercase letter
Test data 4:
" "
Expected result 4:
"INVALID INPUT"
*/

let var5 = "Y";

if (var5.charCodeAt(0) >= 65 && var5.charCodeAt(0) <= 90)
  console.log(`"${var5}" is an uppercase letter`);
else if (var5.charCodeAt(0) >= 97 && var5.charCodeAt(0) <= 122)
  console.log(`"${var5}" is an lowercase letter`);
else console.log("INVALID INPUT");

/*
QUESTION 6
Requirement:
Assume you are given a single character.
Find if the given character is a special character or not.
Test data 1:
"a"
Expected result 1:
"a"  is not a special character
Test data 2:
"5"
Expected result 2:
"5" is not a special character
Test data 3:
"$"
Expected result 3:
"$"  is a special character
Test data 4:
" "
Expected result 4:
" " is not a special character
*/
let var6 = "7";

let firstChar6 = var6.charCodeAt(0);

if (
  firstChar6 !== 32 &&
  !(firstChar6 >= 48 && firstChar6 <= 57) &&
  !(firstChar6 >= 65 && firstChar6 <= 90) &&
  !(firstChar6 >= 97 && firstChar6 <= 122)
) {
  console.log(`"${var6}" is a special character`);
} else {
  console.log(`"${var6}" is not a special character`);
};
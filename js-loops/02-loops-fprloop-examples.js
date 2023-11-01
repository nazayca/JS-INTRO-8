/*
Write a program that outputs numbers from 5 to 25
5
6
7
.
.
.
.
24
25

start: 5
termination: 25
update: ++ (increment)
*/

for(let i = 5; i <= 25; i++) {
  console.log(i);
}

/*
Write program that outputs number between 15 and 1 descending
15
14
13
.
.
.
.
3
2
1

start: 15
termination: 1
update: -- (decrement)
*/

for(let i = 15; i >= 1; i--) {
  console.log(i);
}


/*
Write a program that outputs only even numbers from 0 to 10 (0 and 10 are included)
      Expected output:
      0
      2
      4
      6
      8
      10

      start: 0
      termination: 10
      update: ++ (increment)
*/

for(let i = 0; i <= 10; i++) {
  if(i % 2 === 0) console.log(i); 
}


/*
Write a program to check numbers from 1 to 50 (both included) and ouput all the numbers that can be divided by 5
      Expected output:
      5
      10
      15
      .
      .
      .
      40
      45
      50
*/

for(let i = 1; i <= 50; i++) { 
  if(i % 5 === 0) console.log(i);
}

/*
Write a program that finds the sum of numbers from 1 to 5 (both inclusive)

1 + 2 + 3 + 4 + 5

15
*/
let sum = 0;

for(let i = 1; i <= 5; i++) {
  sum += i;
}

console.log(sum); // 15


/*
Write a program that finds the sum of numbers from 10 to 15 (both inclusive)

10 + 11 + 12 + 13 + 14 + 15

75
*/

sum = 0;

for(let i = 10; i <= 15; i++) {
  sum += i;
}

console.log(sum); // 75


/*
Write a program that generates a random number between 10 and 20 (both inclusive)
And it outputs all the odd numbers starting from 1 to random number (both inclusive)

start: 1
termination: random bt 10 and 20 
update: ++ (increment)
*/


for(let i = 1; i <= Math.floor(Math.random() * 11) + 10; i++) {
  if(i % 2 !== 0) console.log(i);
}

/*
Print all the numbers between 2 random numbers in the range of 1 to 10 (both inclusive) in ascending order

r1 r2
7, 5    -> 5 6 7
4, 8    -> 4 5 6 7 8
5, 5    -> 5
*/

let r1 = Math.ceil(Math.random() * 10);
let r2 = Math.ceil(Math.random() * 10);

console.log(r1, r2);

// Preferred - less code
for(let i = Math.min(r1, r2); i <= Math.max(r1, r2); i++) {
  console.log(i);
}

// Still good - open for improvement
if(r1 < r2) {
  for(let i = r1; i <= r2; i++) {
      console.log(i);
  }
}
else {
  for(let i = r2; i <= r1; i++) {
      console.log(i);
  }
}
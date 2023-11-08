



let num1 = 5, num2 = 17;

for(let i =num1<=num2;i++;){
    console.log(i)
}
// skip the odd print even numbers
for(let i =num1<=num2;i++;){
   if(i %2 === 0)console.log(i);
  
}

for(let i =num1<=num2;i++;){
    if(i %2 !== 0)continue;
    else console.log(i);
   
 }

/*
break;
    break is used to terminate the loop.
continue;
    continue is used to skip only current iteration if a specified condition occurs and     continues with the next iteration in the loop.
*/



for(let i = num1; i <= num2; i++) {
    console.log(i);
}

// skip the odd numbers, print the evens only
for(let i = num1; i <= num2; i++) {
    if(i % 2 === 0) console.log(i);
}


for(let i = num1; i <= num2; i++) {
    if(i % 2 !== 0) continue;
    else console.log(i);
}
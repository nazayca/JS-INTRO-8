let i = 1;

while(i <= 3) {
    console.log('While Loop | Hello World!');
    i++;
}


let j = 1;
do {
    console.log('Do-While Loop | Hello World!');
    j++;
} while(j <= 3);


// No execution
for(let i = 1; i < 0; i++) {
    console.log('I AM EXECUTING!!!');
}

// No execution
let num = 1; 

while(num < 0) {
    console.log('I AM EXECUTING!!!');
    num++;
}


// Yes execution
let n = 1;

do {
    console.log('I AM EXECUTING!!!');
    n++;
} while(n < 0);


let pin = 1234; // 1000 9999
let attempt = 0;
let randomPin;

do {
    randomPin = Math.floor(Math.random() * 9000) + 1000;
    if(pin === randomPin) {
        console.log("YOU ARE IN!");
    }
    else {
        attempt++;
        if(attempt === 10) {
            console.log('You already attempted 10 times!!!')
            console.log('YOU ARE LOCKED FOR 10 MINUTES!!!');
            break;
        }
    }
} while (pin !== randomPin);
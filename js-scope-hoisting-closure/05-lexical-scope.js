function score() {
    let yourScore = 0; // closure

    function inner(isWin) {
        if(isWin) yourScore += 1;
        return yourScore;
    }

    return inner;
}


const myVar = score(); // it starts the variable yourScore with zero and returns the inner function

console.log(myVar(true));
console.log(myVar(false));
console.log(myVar(true));


/*
-Closure is about having a information to be private and cannot be modified outside the function directly
-But, you want to provide a different access to modify it with an inner method
-Your outer method returns the inner method
-Then, you can modify the CLOSED-PRIVATE variable thru the inner method returned by outer method

yourScore is initialized with the value 0
inner function created which increases the score by one or not
inner function is returned
*/

let counter = 0;

function increase() {
    return counter += 1;
}

console.log(increase());
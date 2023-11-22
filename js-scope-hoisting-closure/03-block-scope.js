//Block scope is introduced with ES6
//Block Scope


console.log(x)//undefined
console.log(y)// Error- referenceError y is not definede
console.log(z)//Error-RefeneceError z is not defined 
{
    var x = 10
    let y = 11
    const z = 12

 console.log(x)//10
 console.log(y)//11
 console.log(z)//12
}

 console.log(x)//10
 console.log(y)// Error- reference error
 console.log(z)//Error-Refenece error
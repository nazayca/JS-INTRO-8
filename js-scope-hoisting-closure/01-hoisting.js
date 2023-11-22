//Check if you can acces this info here




// Globbaly declares ans assigned 3 variables
var x = 10
let y = 11
const z = 12

//Check if you can acces this info here
//-This is Hoisting
// Js moves decleration of the variables created with var to the top of the file btu not the value
// - If you try to retriewe a var value before its assignment you will get undefiened istead of Reference error



//

//Regular function decleration -hoisted
//funcA()
function funcA(){
    console.log('This is function A')
}
// function expression
//funcB() // error--> not hoisted
const funcB = function(){
    console.log('This is function B')
}
//funcC()// error--> not hoisted
const funcC = ()=>{
    console.log('This is function C')
};
//Invoking all the functions
funcA()
funcB()
funcC()
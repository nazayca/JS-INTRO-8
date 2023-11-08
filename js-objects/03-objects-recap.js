/*
Create a car object with below information
    color : 'red',
    year : 2023,
    make : 'BMW',
    model : 'X7'

    Output the object 
*/


const car = {
    color: 'red',
    year: 2023,
    make: 'BMW',
    model: 'XY',
   
};
console.log(car); 
/*
First, update color to be black
Then, output all the values to the console.
    black
    2023
    BMW
    X7
*/
car.color = 'Black'

console.log(car); 
for(info in car){
    console.log(car[info])
};
   

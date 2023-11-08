const car = {
    color: 'red',
    year: 2023,
    make: 'BMW',
    model: 'X7',
   
};
console.log(Object.keys(car))
console.log('\n---------------iteration of object keys with for.. of loop---------')
for(const key of Object.keys(car)){
    console.log(key);
}
console.log('\n-------------iteration of object keys with for Each( method--------')
Object.keys(car).forEach(key=>console.log(key));

console.log('\n--------------iteration of object keys with for loop-------------\n')
for(let i = 0; i<Object.keys(car).length; i++){
    console.log(Object.keys(car)[i])
}
console.log('\n--------------iteration of object values with for..of loop-------------\n')
console.log(Object.values(car));
for(const value of Object.values(car)){
    console.log(value)
}
console.log('\n--------------iteration of object values with for loop-------------\n');
 for(let i = 0; i<Object.values(car).length; i++){
    console.log(Object.values(car)[i])
 }
 console.log('\n-------------iteration of object values with for Each( method--------')
 Object.values(car).forEach(value=>console.log(value));

 console.log(Object.entries(car));
 Object.entries(car).forEach(entry=>console.log(entry));


 for(const[key,value]of Object.entries(car)){
    console.log(`The key is '${key}' and the values is '${value}'`)
 }
 // check value array red
 console.log(Object.values(car).includes('red'))
 console.log(Object.keys(car).indexOf('engine')>=0);
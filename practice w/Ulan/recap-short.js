const  fruits = ['Apple', 'Banana', 'Cherry','Kiwi']



const num3 =[1,2,3]
let sum = 0;
num3.forEach(num=> sum += num)
console.log(sum)

const sum2 = num3.reduce((acc, num)=>{
return acc+num
},0)
console.log(sum2)

// Array ofObjects


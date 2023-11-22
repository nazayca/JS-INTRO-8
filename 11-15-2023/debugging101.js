function addNumbers(a,b){
    const sum = a * b;
    console.log('sum', sum)// sum of a+b
    return sum;
    
}
addNumbers(10,5)

/**
 * 
console(log, warn error)
 */

function onlyEvenNumbes(num){
   if(num % 2 === 0) {
       console.log('Yes it is even')

   
   }else if(num % 3 === 0){
       console.warn('Beware this is not valid number!')
   }
            
   else{
       console.error('No, it is not even!')
   }
}
     onlyEvenNumbes(10)
    onlyEvenNumbes(7)
    onlyEvenNumbes(3)

function countNum(num) {
    console.time()
    for( let i = 0; i <num; i++){
        console.log(i)
    }
    console.timeEnd();
}
countNum(10)
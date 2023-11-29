function print1(){
    console.log('1')
}
function print2(){
    console.log('2')
}
function print3(){
    console.log('3')
}
// print1();
// print2();
// print3();

/*
1
2
3
*/

print1();

setTimeout(() =>{
    print2()
},500)

print3()

// What if you want to wait for 2?



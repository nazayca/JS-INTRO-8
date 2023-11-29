// Syntax of Promise 
const myPromise = new Promise((resolve, reject) => {
    resolve('Fullfilled! | Successful!');
    reject('ERROR! | FAILED');
});


console.log(myPromise); // Promise { 'Fullfilled! | Successful!' }


const promiseAge = new Promise((resolve, reject) => {
    const age = Math.floor(Math.random() * 30);
    console.log(`Age is = ${age}.`);
    if (age >= 16) {
        resolve();
    }
    else reject();
});


promiseAge.then(() => {
    // Success body
    console.log('THE AGE IS ALLOWED!');
}).catch(() => {
    // Fail body
    console.log('ERROR! THE AGE IS NOT ALLOWED!');
});


// Returning promises in a function
function testAge() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const age = Math.floor(Math.random() * 30);
            console.log(`Age is = ${age}.`);
            if(age >= 16) {
                resolve();
            }
            else reject();
        }, 2000);
    });
}

testAge().then(() => {
    // Success code
    console.log('YOU CAN GET DL WITH AN EXAM!');
}).catch(() => {
    console.log('ERROR: YOU CANNOT GET DL!');
});


//Alogin promise

function login(username,password){
    return new Promise((resolve,reject) =>{
     if(username === 'TechGlobal'){
     if(password === 'Test1234') resolve()
      else reject()
     }
     else reject()
    });
    
}
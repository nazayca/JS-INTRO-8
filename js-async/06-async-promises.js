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
            if (age >= 16) {
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



// A login promise username = TechGlobal and password = Test1234
function login(username, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === 'TechGlobal') {
                // Check password
                if (password === 'Test1234') resolve();
                else reject('invalid-password');
            }
            else reject('invalid-username');
        }, 3000);
    });
}


login('TechGlobal', 'Test1234').then(() => {
    console.log('You are logged in');
}).catch((err) => {
    if (err === 'invalid-username') console.log('Invalid Username entered!');
    else console.log('Invalid Password entered!');
});
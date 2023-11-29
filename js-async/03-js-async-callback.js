

/*
1. enter your username and password click on login button
2. validation will happen
3.login
*/

function enterCreds(){
    console.log('Credentials entered!');
}
function valitadeCred(callbackfn){
   setTimeout(() =>{
    console.log('Credentials are velidated');
    callbackfn()

   },5000)
}

function login(){
    console.log('You are logged in')
}

enterCreds();
valitadeCred(() =>{
    login()
})
//login();

enterCreds();
valitadeCred();

// // hard pause
// setTimeout(() =>{
//     login()
// },5000)
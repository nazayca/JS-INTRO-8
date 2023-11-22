

//this key word
console.log(this) //{} // NOTE: you might get different values
// for example 
//on client side code you migth get window object 
//on server side code you migth get global object 

// 'this' in our local objects
// Implicit binding------------------------
let person = {
    name: 'Alex',
    greet: function () {
        console.log(`Hi, ${this.name}`)
    },
};

person.greet(); // 'this' is refering to person onject

//Expilicit binding-----------------------

function greet() {
    console.log(this); //oglobal object
    console.log(`Hi, ${this.name}`)
}
let person2 = {
    name: 'Jhon',
};

greet()

// the goal is to greet function to person2 object
//Thus, changing the context of this from 'global object to 'person2'

greet.call(person2);

function welcome() {

    console.log(`Welcome, ${this.name}`)

    const student = {
        name: "Alex",
    }
    const teacher = {
        name: 'Hasan',
    }
    const client = {
        name: 'Joe'
    }
}
welcome.call(student);
welcome.call(teacher);
welcome.call(client);

// APPLY------------------------------------
// without argument .call and .apply works the same
const user = { name: 'Alex' }
function welcomeUser() {
    console.log(`Welcome, ${this.name}`)
}

welcomeUser.apply(user)

// with argument .apply takes an array 

function welcomeUser(name, city) {
    console.log(`Welcome, ${name} and your city is ${city}`);
}

welcomeUser(null, 'Alex', 'Chicago')
welcomeUser.apply(null, ['Jane', 'LA'])


// BIND-----------------------
// Similiar to .call and .apply
//


const user2 = {
    name: 'Alan',
    age: 20,
    hobbies: ['running', 'reading', 'hiking'],
    greet() {
        console.log(this)
       // console.log(`HI,${this.name}`)
        this.hobbies.forEach( (hobby,idx)=> {
            console.log(`${this.name}'s hobbies are:${idx+1} ${hobby}`)
        } // bind funtion to user2
        );
    },

};

user2.greet()

//1. user2
//2.object [global] 3 times
// Regular function have its own 'this'
//Then i want to change the contex of 'this' inside regular function to 'this' of user2


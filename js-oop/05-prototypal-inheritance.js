// Prototypal Inheritance before ES6
// Person Object with 3 functions
const person = {
    eat: function() {
        console.log('EAT');
    },
    sleep: function() {
        console.log('SLEEP');
    },
    walk: function() {
        console.log('WALK');
    }
}
// Programmer Object with 4 functions - code
const programmer = {
    eat: function() {
        console.log('EAT');
    },
    sleep: function() {
        console.log('SLEEP');
    },
    walk: function() {
        console.log('WALK');
    },
    code: function() {
        console.log('CODE');
    }
}
// Singer Object with 4 functions - sing


const singer = {
    __proto__: person,
    sing : function(){
        console.log('SING')
    }
}
const band = {
    __proto__: singer, // now the singer is parent of band and person is grand parnt of band and paternts all above object itself
  play: function(){
        console.log('Play')
    }
    
}
singer.eat();
singer.sleep();
singer.walk();
singer.sing();

band.sing()

person.eat();
person.walk();
person.sleep();
//person.code(); // TypeError: person.sing is not a function
//person.sing(); // TypeError: person.sing is not a function


// Prototype Chaining
console.log(singer.__proto__); //
console.log(singer.__proto__.__proto__); //
  


   

//programmer object with four function
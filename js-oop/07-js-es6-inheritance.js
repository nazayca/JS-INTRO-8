// ES6 Inheritance

// Parent class
class Person {
    constructor(fullname, age){
        this.fullname = fullname;
        this.age = age;
    }

    eat() {
        console.log('EAT');
    }

    sleep() {
        console.log('SLEEP');
    }

    walk() {
        console.log('WALK');
    }
}

// Inherit all the Person properties and functions to Singer
class Singer extends Person {
    constructor(fullname, age, groupName) {
        super(fullname, age); // Invokign parent constructor to assign fullname and age//should be 1st statment
        this.groupName = groupName;
    }

    sing() {
        console.log('SING');
    }
}

// Inherit all the Person properties and functions to Programmer
class Programmer extends Person {
    constructor(fullname, age, companyName) {
        super (fullname,age);
        this.companyName = companyName;
    }
    code() {
        console.log('CODE');
    }
}
const person1 = new Person('John Doe', 25);
const singer1 =new Singer ('Jane Doe', 20, 'Pink');
const programmer1 = new Programmer ('Alex ', 30, 'Apple');

person1.eat();
singer1.eat();
programmer1.eat();

person1.walk(); // WALK
singer1.walk(); // WALK
programmer1.walk(); // WALK

person1.sleep(); // SLEEP
singer1.sleep(); // SLEEP
programmer1.sleep(); // SLEEP

singer1.sing(); // SING
// person1.sing(); // TypeError: person1.sing is not a function
// singer1.code(); // TypeError: singer1.code is not a function

programmer1.code(); // CODE
// programmer1.sing(); // TypeError: programmer1.sing is not a function
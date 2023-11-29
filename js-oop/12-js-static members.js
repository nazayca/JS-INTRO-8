




//All the Math methods that we used were static methods
console.log(Math.max(3,5));
Math.random();
//Static property
console.log(Math.PI);
console.log(Number.MIN_SAFE_INTEGER)

class Computer{
    // non-static
    brand = 'APPLE'
    // non-static- belongs to object
    run(){
        console.log('RUN FUNCTION')

    }
    //static-belongs to class
    static info = 'SECRET INFO';

    static open(){
        console.log("OPEN FUNCTION")
    }
}

const c1 = new Computer();
console.log(c1.brand);
c1.run()

//c1.open()// type error

Computer.open();
//console.log(c1.info) undefined
console.log(Computer.info)


class Person{
    static hasEyes = true; // universal info for all the person, so make sense to make static
    constructor(name,address,gender){ // varies person to person objects
        this.name = name;
        this.address = address;
        this.gender = gender;
    }
    //static hasEyes = true; here as well
    walk(){
        console.log(this.name,'NON STATIC_FUNCTION')
    }
    static breath(){
        console.log('STATIC BREATH FUNCTION')
    }
}

const ayca = new Person('Ayca','AL','Female');
const suzanne = new Person('Suzanne','IL', 'Female')

console.log(ayca.name)//Ayca
console.log(Person.hasEyes);
ayca.walk();

Person.breath();
//Person.walk()-----> tyepError
//ayca.breath()-------> typeError
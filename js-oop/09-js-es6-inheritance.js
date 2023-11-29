
/*
Create a class called as Animal
Create a constructor which takes 'name', 'age', 'color'
Create 2 functions eat(), run()
*/



/*
Create a class called as Cat and inherit all the Animal class properties and methods
Create a constructor which takes 'name', 'age', 'color', 'breed'
Create 1 function play()
*/


/*
Create a class called as Dog and inherit all the Animal class properties and methods
Create a constructor which takes 'name', 'age', 'color', 'breed'
Create 1 function catch()
*/


/*
Create a class called as Husky and inherit all the Dog class properties and methods
Create a constructor which takes 'name', 'age', 'color', 'breed', 'shed'
Create 1 function protect()
*/


// TRY THIS WITH PROTOTYPAL INHERITANCE AS WELL





class Animal{
    constructor(name, age, color){
        this.name = name;
        this.age = age;
        this.color = color;
    }
    eat(){
        console.log('EAT')
    }
    run(){
        console.log('RUN')
    }
}
class Cat extends Animal {
    constructor(name, age,color, breed){
        super(name,age,color);
        this.breed = breed;
    }
    play(){
        console.log('PLAY');
    };
}

class Dog extends Animal{
    constructor(name, age, color,breed){
        super(name,age,color);
        this.breed = breed;
    }
    catch(){
        console.log('CATCH');
    };
}
 class Husky extends Dog{
    constructor(name, age, color, breed, shed){
        super(name, age, color,breed);
        this.shed = shed;
    }
    protect(){
        console.log('PROTECT');
    };
 }



const cat1 = new Cat('Garfield', 2, 'Orange', 'British Shorthair');
const cat2 = new Cat('Ajda',3, 'White', 'Turkish Angora');
const dog1 = new Dog('Echo', 3, 'Brown', 'Labrador')
const dog2 = new Dog('Lessie',25,'White-Brown' ,'Collie', )
const husky1  = new Husky('Bluey',1 , 'White Black','Husky','Shed')

const allCats = [cat1, cat2]
const allDogs = [dog1, dog2]


for(const cat of allCats){
    console.log(cat)
    console.log(cat.name);
    console.log(cat.age);
    console.log(cat.color);
    console.log(cat.breed);
    cat.eat()
    cat.run()
    cat.play()
}
for(const dog of allDogs){
    console.log(dog)
    console.log(dog.name);
    console.log(dog.age);
    console.log(dog.color);
    console.log(dog.breed);
    dog.eat()
    dog.run()
    dog.catch()

}
console.log(husky1)
console.log(husky1.name)
console.log(husky1.age)
console.log(husky1.color)
console.log(husky1.breed)

husky1.eat()
husky1.run()
husky1.protect()
husky1.catch()
///////////////////////////////////////////////////////////



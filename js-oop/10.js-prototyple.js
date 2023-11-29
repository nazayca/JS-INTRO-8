/*
Create a prototype called as Animal which takes 'name', 'age', 'color'
Create 2 prototype functions eat(), run()
*/



/*
Create a prototype called as Cat and inherit all the Animal prototype properties and methods which takes 'name', 'age', 'color', 'breed'
Create 1 prototype function play()
*/


/*
Create a prototype called as Dog and inherit all the Animal prototype properties and methods which takes 'name', 'age', 'color', 'breed'
Create 1 prototype function catch()
*/


/*
Create a prototype called as Husky and inherit all the Dog prototype properties and methods which takes 'name', 'age', 'color', 'breed', 'shed'
Create 1 prototype function protect()
*/
function Animal(name, age, color) {
this.name = name;
this.age = age;
this.color = color;
}
Animal.prototype.eat = function () {
console.log('EAT')
}
Animal.prototype.run = function () {
console.log('RUN')
}

function Cat(name, age, color,breed) {
Animal.call(this,name,age,color)
this.breed = breed;
}

Cat.prototype = Object.create(Animal.prototype);

Cat.prototype.play = function () {
 console.log('PLAY')
}
function Dog(name, age, color,breed) {
this.name = name;
this.age = age;
this.color = color;
this.breed = breed;

}
Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.catch = function () {
console.log('CATCH');
}

function Husky(name, age, color,breed,shed){
this.name = name;
this.age = age;
this.color = color;
this.breed = breed;
this.shed = shed
}
Husky.prototype = Object.create(Dog.prototype)
Husky.prototype.protect = function(){
    console.log('PROTECT')
}

const cat1 = new Cat('Garfield', 2, 'Orange', 'British Shorthair');
const cat2 = new Cat('Ajda',3, 'White', 'Turkish Angora');
const dog1 = new Dog('Echo', 3, 'Brown', 'Labrador');
const dog2 = new Dog('Lessie',25,'White-Brown' ,'Collie', );
const husky1  = new Husky('Bluey',1 , 'White Black','Husky','Shed');

const allCats = [cat1, cat2]
const allDogs = [dog1, dog2]

for(cat of allCats){
console.log(cat)
console.log(cat.name);
console.log(cat.age);
console.log(cat.color);
console.log(cat.breed);
cat.eat()
cat.run()
cat.play()
}
for(dog of allDogs){
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
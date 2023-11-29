
// Create a Person constructor 
function Person(fullname,age){
    this.fullname = fullname;
    this.age = age;

}
Person.prototype.eat = function(){
    console.log('EAT');
}
Person.prototype.sleep = function(){
    console.log('SLEEP');
}
Person.prototype.walk = function(){
    console.log('WALK');
}

function Programmer(){} 
Programmer.prototype = Object.create(Person.prototype);// get everything form person to programmer
Programmer.prototype.code = function(){
    console.log("CODE")
}

const programmer1 = new Programmer('John Doe',45)
console.log(programmer1)
programmer1.code()
programmer1.eat()
programmer1.sleep()
programmer1.walk()




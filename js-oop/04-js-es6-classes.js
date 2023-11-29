class Cat {
    constructor(name, color, age) {
        this.name = name;
        this.color = color;
        this.age = age
    }
    makesSound() {
        console.log(`${this.name}, ${this.color}, ${this.age} 'MEOW'`)
    }
    eat() {
        console.log(`${this.name}, ${this.color}, ${this.age} 'EAT`)
    }
    sleep() {
        console.log(`${this.name}, ${this.color}, ${this.age} 'SLEEP'`)
    }
}

const cat1 = new Cat('Simba', 'Orange', 1)
const cat2 = new Cat('Lucy', 'white', 2)
const cat3 = new Cat('Oliver', 'Brown', 3)

const allCats = [cat1, cat2, cat3]

for (cat of allCats) {
    console.log(Cat)
    console.log('Names is', cat.name)
    console.log('Age is ' , cat.age)
    console.log('The color is ',cat.color)
    cat1.sleep()
    cat2.eat()
    cat3.makesSound()
    console.log('-----------------------------------')
}

// store all the cats name in an array

console.log(allCats.map(cat => cat.name));

// Store all the cats name that are older than 1 year -> [ 'Lucy', 'Oliver' ]
console.log(allCats.filter(cat =>  cat.age > 1).map(cat => cat.name)); // [ 'Lucy', 'Oliver' ]

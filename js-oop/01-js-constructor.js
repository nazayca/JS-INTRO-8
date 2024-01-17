/*
Create an object called as student1 with the below information


fName: 'John',
lName: 'Doe',
age: 25


student2
fName: 'Jane',
lName: 'Doe',
age: 23


student3
fName: 'Alex',
lName: 'Smith',
age: 30


student4
fName: 'Morgan',
lName: 'Smith',
age: 19
*/

/*
NOT EFFICIENT
const student1 = {
    fName: 'John',
    lName: 'Doe',
    age: 25,
    study: function() {
        console.log(`${this.fName} studies.`);
    },
    getAge: function() {
        console.log(`${this.fName} ${this.lName}'s age is ${this.age}.`);
    }
};

const student2 = {
    fName: 'Jane',
    lName: 'Doe',
    age: 23,
    study: function() {
        console.log(`${this.fName} studies.`);
    },
    getAge: function() {
        console.log(`${this.fName} ${this.lName}'s age is ${this.age}.`);
    }
};

const student3 = {
    fName: 'Alex',
    lName: 'Smith',
    age: 30,
    study: function() {
        console.log(`${this.fName} studies.`);
    },
    getAge: function() {
        console.log(`${this.fName} ${this.lName}'s age is ${this.age}.`);
    }
};

const student4 = {
    fName: 'Morgan',
    lName: 'Smith',
    age: 19,
    study: function() {
        console.log(`${this.fName} studies.`);
    },
    getAge: function() {
        console.log(`${this.fName} ${this.lName}'s age is ${this.age}.`);
    }
};
*/

// Create a template and use it to create many objects

// Constructor is a special function that allows you to create many similar objects
function Student(fName, lName, age) {
    this.fName = fName;
    this.lName = lName;
    this.age = age;
}

// Adding a function to your prototype
Student.prototype.study = function () {
    console.log(`${this.fName} ${this.lName} studies.`);
}

Student.prototype.getAge = function () {
    console.log(`${this.fName} ${this.lName}'s age is ${this.age}.`);
}

// Create and add a new prototype function called getAge -> logs {fullname}'s age is{age}.
// Test it with student2 and student4

const student1 = new Student('John', 'Doe', 25);
const student2 = new Student('Jane', 'Doe', 23);
const student3 = new Student('Alex', 'Smith', 30);
const student4 = new Student('Morgan', 'Smith', 19);
const student5 = new Student('James', 'Smith', 35);

console.log(student3); // Student { fName: 'Alex', lName: 'Smith', age: 30 }
console.log(student5.lName); // Smith

student2.study(); // Jane Doe studies.
student4.study(); // Morgan Smith studies.

student2.getAge(); // Jane Doe's age is 23.
student4.getAge(); // Morgan Smith's age is 19.


// Constructor - prototype/blueprint/template
function Teacher(fName, lName, age, field) {
    this.fName = fName;
    this.lName = lName;
    this.age = age;
    this.field = field;
}

// Create 3 teacher objects with the proper information - Log all the objects
function Teacher(fName, lName, age, field) {
    this.fName = fName;
    this.lName = lName;
    this.age = age;
    this.field = field;
}


const teacher1 = new Teacher('David', 'Doe', 98, 'Scuba Instructor');
const teacher2 = new Teacher('Arnold', 'schwarzenegger', 76, 'Gym');
const teacher3 = new Teacher('Bowser', 'Junior', 13, 'Art');

console.log(teacher1);
console.log(teacher2);
console.log(teacher3);


// What teacher does -> 
// teach() -> {fName} teaches. 
// giveHomework() {fName} gives homework.


// Oldest teacher -> David
// Youngest student -> Morgan
// Count the students with the last name Smith -> 3
// Count the students with the first name having letter a ignoring cases -> 4
const teachers = [teacher1, teacher2, teacher3];
const students = [student1, student2, student3, student4, student5];

Teacher.prototype.teach = function () {
    console.log(`${this.fName} ${this.lName} teaches`)
}

Teacher.prototype.giveHomework = function () {
    console.log(`${this.fName} ${this.lName} gives homework`)
}

teacher1.teach();
teacher2.giveHomework();

const oldestT = teachers.reduce((oldest, curr) => (oldest.age > curr.age ? oldest : curr),{})
console.log('Oldest teachers is', oldestT.fName)

const youngestT = teachers.reduce((youngest, curr) => youngest.age < curr.age ? youngest : curr,{})
console.log(`The youngest teacher is ${youngestT.fName} ${youngestT.lName}`)

const youngestS = students.reduce((youngestS, curr) => (youngestS.age < curr.age ? youngestS : curr));
console.log('The youngest student is ', youngestS.fName);

console.log(students.filter((student) => student.lName === 'Smith').length)

const aCount = students.filter((student) => student.fName.toLowerCase().startsWith('a')).length
console.log(aCount)


  
  
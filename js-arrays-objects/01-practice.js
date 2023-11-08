/*
Create a student object with below info
firstName : Alex
lastName : Smith
hobbies : Soccer - Watching movies
exam_scores : midterm: 60 and final: 90

Output your object to the console
*/

const student = {
    firstName: 'Alex',
    lastName: 'Smith',
    hobbies: [ 'Soccer', 'Watching movies'],
    exam_scores: {
        midterm: 60,
        final: 90
    }
};

console.log(student);

/*
Print hobbies -> [ 'Soccer', 'Watching Movies' ]
Print exam_scores -> { midterm: 60, final: 90 }
Print Soccer -> Soccer
*/

console.log(student.hobbies); // [ 'Soccer', 'Watching movies' ]
console.log(student.hobbies[0]); // Soccer
console.log(student.exam_scores); // { midterm: 60, final: 90 }

/*
Find and print average of exam scores -> 75
*/

let average = (student.exam_scores.midterm + student.exam_scores.final) / 2;
console.log(average); // 75

// If there are more exam scores in the object - it is better to use loop logic
const exam_results = Object.values(student.exam_scores); 

let sum = 0;

for(const result of exam_results) {
    sum += result;
}

console.log(sum / exam_results.length);


/*
Create a book object
name is Amok
author's first name is Stefan
author's last name is Zweig
genre is Novella
*/

const book = {
    name: 'Amok',
    author: {
        firsName: 'Stefan',
        lastName: 'Zweig'
    },
    genre: 'Novella'
};

/*
Create an array of books that stores 3 books information
Stefan Zweig - Amok - Novella
Orhan Pamuk - My Name Is Red - Historical Novel
George Orwell - 1984 - Dystopian Literature
*/

const books = [
    {
        name: 'Amok',
        author: {
            fname: 'Stefan',
            lname: 'Zweig'
        },
        genre: 'Novella'
    },
    {
        name: 'My Name Is Red',
        author: {
            fname: 'Orhan',
            lname: 'Pamuk'
        },
        genre: 'Historical Novel'
    },
    {
        name: '1984',
        author: {
            fname: 'George',
            lname: 'Orwell'
        },
        genre: 'Dystopian Literature'
    }
];

// Count the books where Author first name has an 'a' -> 2
console.log(books.length); // 3
console.log(books[1]); // { name: 'My Name Is Red', author: { fname: 'Orhan', lName: 'Pamuk' }, genre: 'Historical Novel' }
console.log(books[2].author.lname); // Orwell

let countA = 0;

for(const book of books) {
    if(book.author.fname.toLowerCase().indexOf('a') >= 0) countA++;
}
// for(let i = 0; i <= books.length-1; i++) {
//     if(books[i].author.fname.toLowerCase().includes('a')) countA++;
// }

console.log(countA); // 2
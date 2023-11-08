const names = [ 'John', 'Jane', 'Alex', 'Max'];

// Output all these names to the console - separate lines 

for(let i = 0; i <= names.length-1; i++) {
    console.log(names[i]);
}


// IT IS PREFERRED TO USE for...of loop instead of for loop 
// John is a name of names 
// Jane is a name of names 
// Alex is a name of names 
// Max is a name of names 

for(const name of names) { 
    console.log(name.toUpperCase());
}


/*
Output these names uppercased
JOHN
JANE
ALEX
MAX
*/

for(const name of names) {
    console.log(name.toUpperCase());
}


// Count how many names starts with J       -> 2

let countJ = 0;

// for(let i = 0; i <= names.length-1; i++) {
//     if(names[i][0] === 'J') countJ++;
// }

for(const name of names) {
    if(name[0] === 'J') countJ++;
}

console.log(`There are ${countJ} name/s starts with letter 'J'.`);
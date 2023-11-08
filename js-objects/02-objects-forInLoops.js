const person = {
    fName: 'Alex',
    lName: 'Smith',
    age: 30,
    phone: '312 000-0000'
};

for(const variable in person) {
    console.log(person[variable]);
}
const student = {
    fullName : 'JhonDoe',
    age :18,
    course:'Software Engineering'
};

// how to get all the keys of an object asn array
const studentKeys = Object.keys(student);
console.log(studentKeys)
console.log(Object.keys(student))

// how to get values
const studentValues = Object.values(student);
console.log(studentValues);
console.log(Object.values(student));

//how to get key value pair
const studentEntries = Object.entries(student);
console.log(studentEntries)// nested array
console.log(Object.entries(student));

const country = {
    name : 'Germany',
    capital: 'Belin',
    population: 83000000


}
const countryValues = Object.values(country)
console.log(countryValues);
const countryKeys = Object.keys(country)
console.log(countryKeys);
const countryEntries = Object.entries(country).flat()
console.log(countryEntries)
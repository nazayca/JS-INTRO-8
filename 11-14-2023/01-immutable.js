// What is immutable JavaScript?

// Mutable and Immutable

// Mutable -> its easy to explain/show
// Immutable -> hard to explain/show

// V8 -> engine that runs your javascript code

// 1. All the primitive values are immutable by nature

let city = "Chicago"; // => Phicago
city[0] = "P";
console.log(city); // Phicago or Chicago?

let count = 1;
count++; // Even though its looks we are modifiying original variable, in reality we just making copy
console.log(count); // 1 or 2?

// Even though we can't modify, we can reassign
city = "New York";
console.log(city); // Chicago or New York?

// 2. Arrays and Objects are mutable by nature
let person = {
  name: "John",
};
person.name = "Kyle";
console.log(person); // {name: 'Kyle'}

const names = ["John", "Kyle"];
names[2] = "Joe";
console.log(names); // ['John', 'Kyle', 'Joe']

// prevent original names array from modification
const names = ["John", "Kyle"];
const modifiedNames = names.concat("Joe");
console.log(names); // ['John', 'Kyle']
console.log(modifiedNames); // ['John', 'Kyle', 'Joe']

// to push to names

function addUser(users) {
  users.push("Joe");
  return users;
}
// Functions needs to pure as much as possible
// Without side effects
function addUserPure(users) {
  const copyOfUsers = [...users];
  copyOfUsers.push("Joe");
  return copyOfUsers;
}
const users = ["John", "Kyle"]; // never modified
console.log(addUser(users)); // [ 'John', 'Kyle', 'Joe' ] => has side effects
console.log(users); // [ 'John', 'Kyle', 'Joe' ]

console.log(addUserPure(users)); // [ 'John', 'Kyle'] => pure function
console.log(users); // [ 'John', 'Kyle']

// Object.freeze() and Object.Frozen()
const product = {
  name: "Gifts for Thanksgiving",
  price: 19.99,
};

Object.freeze(product); // Makes your object immutable

product.price = 9.99;
console.log(product);

// Checks if your object immutable
console.log(Object.isFrozen(product)); // true
console.log(Object.isFrozen({ title: "Some title" })); // false

// Check if object's own property with hasOwnProperty() and Object.hasOwn()
const obj1 = { id: 1 };
const obj2 = { ...obj1, title: "Obj2 title" };

console.log(obj1);
console.log(obj2);

console.log(obj1.hasOwnProperty("id")); // true
console.log(obj2.hasOwnProperty("id")); // true
console.log(obj1.hasOwnProperty("title")); // false
console.log(obj2.hasOwnProperty("title")); // true

console.log(Object.hasOwn(obj1, "id")); // true
console.log(Object.hasOwn(obj2, "id")); // true
console.log(Object.hasOwn(obj1, "title")); // false
console.log(Object.hasOwn(obj2, "title")); // true
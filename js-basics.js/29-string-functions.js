// padStart()
let data1 = '5', data2 = '13', data3 = '53000';

console.log(data1.padStart(5, '0'));
console.log(data2.padStart(5, '0'));
console.log(data3.padStart(5, '0'));


// concat()
let str1 = 'abc', str2 = 'xyz', str3 = '123';

console.log(str1 + str2 + str3);
console.log(str1.concat(str2).concat(str3));


// at() - it is like charAt() method or []

let name = 'Alexander';

// d
console.log(name[-3]); // undefined
console.log(name.charAt(-3)); // ''
console.log(name.at(-3)); // 'd'

console.log(name[name.length-3]); // 'd'

// repeat()
let word = 'Miaw';
console.log(word.repeat(5));
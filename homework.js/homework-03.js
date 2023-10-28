//Task 1
let ranNum1 = Math.floor(Math.random()*(100-1+1)+1);
let ranNum2 = Math.floor(Math.random()*(100-1+1)+1);
let ranNum3 = Math.floor(Math.random()*(100-1+1)+1); 
let avaregeOf = (ranNum1 + ranNum2 + ranNum3)/3
 if (avaregeOf <= 50){
    console.log( `True ${avaregeOf}`)

 }
 else{
    console.log(`False ${avaregeOf}`)
 }

 //Task2

 let randomNum1 = Math.floor(Math.random()*(3-1+1)+1);
 let randomNum2 = Math.floor(Math.random()*(3-1+1)+1);
 let randomNum3 = Math.floor(Math.random()*(3-1+1)+1);

 if(randomNum1===randomNum2 && randomNum2 ===randomNum3){
    console.log(`${randomNum1} , ${randomNum2}, ${randomNum3} TRIPLE MATCH`)
 }
 else if (randomNum1===randomNum2|| randomNum1===randomNum3 || randomNum2===randomNum3){
    console.log(`${randomNum1} , ${randomNum2}, ${randomNum3} DOUBLE MATCH`)
 }
 else{
    console.log(`${randomNum1} , ${randomNum2}, ${randomNum3} NO MATCH`)
 }
 
 //Task 3
 let str;
    function hasA(str){
        if(str.includes('a')|| str.includes('A')){
            return "True"
        }
        else{
            return "False"
        }
    }
  console.log(`hasA("Tech")--> ${hasA("Tech")}`)  ;
  console.log(`hasA("Global")--> ${hasA("Global")}`)  ;
  console.log(`hasA("")--> ${hasA("")}`)  ;
  console.log(`hasA(" ")--> ${hasA("Apple")}`)  ;

  //Task 4
    let string; 
  function doubleOrTrippleWord(string){
    if (string.length %2 === 0){
        return string.repeat(3)
    }
    else{
      return string.repeat(2)
    }
  }
 console.log(`doubleOrTripleWord("Tech") --> ${doubleOrTrippleWord("Tech")}`);
 console.log(`doubleOrTripleWord("Apple") --> ${doubleOrTrippleWord("Apple")}`);
 console.log(`doubleOrTripleWord("") --> ${doubleOrTrippleWord("")}`);
 console.log(`doubleOrTripleWord(" ") --> ${doubleOrTrippleWord(" ")}`);
 console.log(`doubleOrTripleWord("1") --> ${doubleOrTrippleWord("1")}`);
 console.log(`doubleOrTripleWord("22") --> ${doubleOrTrippleWord("22")}`);
 

 //Task 5

 let word ;
function firstWord(word){
return word.split(' ')[0];
}

console.log(`firstWord("Hello World")--> ${firstWord("Hello World")}`);
console.log(`firstWord("I like JavaScript")--> ${firstWord("I like JavaScript")}`);
console.log(`firstWord("Hello")--> ${firstWord("Hello")}`);
console.log(`firstWord("")--> ${firstWord("")}`);
console.log(`firstWord(" ")--> ${firstWord(" ")}`);


//Task-6

let word2 ;
function lastWord(word2){
   return word2.split(' ').pop();
}
console.log(`lastWord ("Hello World")-->${ lastWord("Hello World")}`);
console.log(`lastWord ("I like JavaScript")-->${ lastWord("I like JavaScript")}`);
console.log(`lastWord ("Hello")-->${ lastWord("Hello")}`);
console.log(`lastWord ("")-->${ lastWord("")}`);
console.log(`lastWord (" ")-->${ lastWord(" ")}`);


// Task-7
let str2;
function firstLastWord(str2){
  return (`${str2.split(' ')[0]}${str2.split(' ').pop()}`);
}
console.log(`firstLastWord(" Hello World") -->${firstLastWord("Hello World")}`);
console.log(`firstLastWord(" I like JavaScript") -->${firstLastWord("I likeJavaScript")}`);
console.log(`firstLastWord(" Hello") -->${firstLastWord("Hello")}`);
console.log(`firstLastWord("") -->${firstLastWord("")}`);
console.log(`firstLastWord(" ") -->${firstLastWord(" ")}`);

//Task-8

let str3;
function startVowel(str3){
   if (str3.startsWith('a')||str3.startsWith('A')||str3.startsWith('e')||str3.startsWith('E')||str3.startsWith('i')||str3.startsWith('I')||str3.startsWith('o')||str3.startsWith('O')||str3.startsWith('u')||str3.startsWith('U')){
      return "True"
   }
  
else{
   return "False"
}
};
console.log(`startVowel("Hello") --> ${startVowel("Hello")}`);
console.log(`startVowel("Apple") --> ${startVowel("Apple")}`);
console.log(`startVowel("orange") --> ${startVowel("orange")}`);
console.log(`startVowel("") --> ${startVowel("")}`);
console.log(`startVowel(" ") --> ${startVowel(" ")}`);
console.log(`startVowel("123") --> ${startVowel("123")}`);

//Task-9
let str4;
function swap4(str4){
   if(str4.length<4){
      return "";
   }
   else{
      const first4 = str4.slice(0,4);
      const last4 = str4.slice(-4);
      const middle = str4.slice(4,-4);
      const swappedWord = last4 + middle + first4;
      return swappedWord;
   }
};
   console.log(`swap4("abc") --> ${swap4("abc")}`);
   console.log(`swap4("JavaScript")--> ${swap4("JavaScript")}`);
   console.log(`swap4("TechGlobal")--> ${swap4("TechGlobal")}`);
   console.log(`swap4("")--> ${swap4("")}`);
   console.log(`swap4(" ")-->) ${swap4(" ")}`);
   console.log(`swap4("Apple")--> ${swap4("Apple")}`);
  


//Task-10
 let str5 = " foo bar foo bar"
 function swapFirstLastWord(str5){
   const firstWord = str5.slice(0, str5.indexOf(" "));
   const lastWord = str5.slice(str5.lastIndexOf(" ")+1);
   const middleWord = str5.slice(str5.indexOf(" "), str5.lastIndexOf(" ")+1);

  return str5 = lastWord + middleWord +firstWord
}

console.log(swapFirstLastWord("foo bar foo bar"));


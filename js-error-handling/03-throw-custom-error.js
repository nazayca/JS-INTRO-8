function getName(name){
    if(name && typeof name === 'string')console.log('Thanks', name);
    else throw new Error("That's not a name")
}

getName('Jhon')// Thanks John
   // Error: That's not a name
getName('');
getName(null);
getName(undefined);
getName(true)
getName(123)

try{
getName('');
getName(null);
getName(undefined);
getName(true)
getName(123)
}
catch(err){
    console.log('It is not a proper name')
}
finally{
    console.log('The lesson is over')
}
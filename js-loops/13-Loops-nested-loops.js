const studentGroups = [
    ['Alex','Max','Jane'],
    ['John', 'James'],
    ['Ryan', 'Tom']
]

for(const group of studentGroups){
    //console.log(group);
    for(const student of group){
        console.log(student);
    }
}


for(let i = 0; i<studentGroups.length; i++){
    console.log(studentGroups[i]);
}
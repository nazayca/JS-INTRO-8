/*
Assume you fetching data from an external source with the steps below
1. Connect to external source
2. Fetch the data
3. Use data for your script

but assume that;
connecting takes 5 seconds
fetching takes 3 seconds
processing takes 1 second
*/

function connectToDB(event){
    setTimeout(() =>{
    },5000)
    event()
    console.log('CONNECT TO DB')
}

function fatchData(event){
    setTimeout(() =>{

    },3000)
event()
    console.log('DATA RETRIEVED!')
}

function processData(){
    setTimeout(() =>{

    },1000)
    console.log('DATA USED')
}

connectToDB(()=>{
    fatchData(()=>{
        processData()
    }) 
})
// fatchData()
// processData()




// run this code in the bug mode
function findLargestNumbers(nums){
    let largest = 0;
    for(i = 0 ; i<nums.length; i++){
        const num = nums[i];
        //debugger;
        if (num>largest){
            largest = num ;
        }
    }
return largest
}

const numbers = [8,9,1,0,42,4]
console.log(findLargestNumbers(numbers))
console.log(findLargestNumbers([8,9,1,0]))
console.log(findLargestNumbers([1,0,-4]))

/* Either use debuggers;
  *or set breakpint right inside vscode(red dot)*/
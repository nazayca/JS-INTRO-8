/*
Requirement:
Assume you are given a single character.
Find if the given character is a vowel or not.

NOTE: if the character is not a letter, print "INVALID INPUT"
NOTE: Vowel letters: a, e, i o, u, A, E, I, O, U 

Test data 1:
"a"

Expected result 1:
"a"  is a vowel

Test data 2:
"5"

Expected result 2:
"INVALID INPUT"


Test data 2:
"N"

Expected result 1:
"N"  is not a vowel

Test data 4:
" "

Expected result 4:
"INVALID INPUT"*/
/*
Requirements:

Write a function that finds the largest of five numbers.

Note: Using simple if-elseif-else conditions

Test data 1:
-5, -2, -6, 0, -1

Expected result 1:
0


Test data 2:
10, 102, 0, -8, -100

Expected result 2:
102*/

function isEqualTo8( n1,n2){
    if (n1===8 || n2===8 || n1+n2===8|| Math.abs(n1-n2)===8){
        return true
    }
    else{
        return false
    }
   
}
console.log(isEqualTo8(17,18));

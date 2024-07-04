const reverseString = function(string) {
    return string.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;

/* Logic of string reversing
h e l l o
0 1 2 3 4

swap 4 with 0 -> o e l l h
swap 3 with 1 -> o l l e h


e l l
1 2 3
*/

// I attempted to code my own reverse algo but failed to remember how to work it
// Below is my original attempt before using the provided solution
/* 
    const reverseString = function(originalString) {
        const splitString = originalString.split("")
        const reversedString = ""
        for (i=0; i<splitString.length; i++) {
            for (j=splitString.length-1; j<=i; j--) {
                splitString[i] = splitString[j]
                reversedString = splitString;
            }
        }
        return reversedString;
    };
*/

// Here is what I was attempting to do for future reference */

/* 

    let testString = "Hello";
    const splitString = testString.split('')  // Split the string into an array of characters
    console.log(splitString)
    let thisString = ""
    let i = 0
    let j = splitString.length - 1

    while (i < j) {
        // Swap elements at positions i and j
        let temp = splitString[i] // H
        splitString[i] = splitString[j] // H to o
        splitString[j] = temp // o to H (temp value)
        i++
        j--
    }

    thisString = splitString.join('')  // Join the array back into a string
    console.log(thisString)
            }
            thisString = splitString;
        }
    console.log(thisString)
*/




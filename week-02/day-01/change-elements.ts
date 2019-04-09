'use strict';
// -  Create an array named `numList` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the 8 to 4 with the `.map` method 
// -  Print the fourth element as a test

let numList = [1, 2, 3, 8, 5, 6]
numList.map(function (e) {
    return numList[3] / 2;
});
console.log(numList);

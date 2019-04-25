'use strict';

//import { join } from "path";

//  Create a function that takes a number and an array of numbers as a parameter
//  Returns the indices of the numbers in the array of which the first number is a part of
//  Or returns an empty list if the number is not part of any of the numbers in the array

function subint(num: number, arr: number[]) {
    let arr1: number[] = []
    //if (arr.join('').indexOf(num.toString()) == -1) {
      //  return []
    
        for (let i: number = 0; i <= arr.join(',').length; i++) {
                let arr2 = arr[i].toString();             
                if (arr2.indexOf(num.toString()) != -1 ) {
                arr1.push(i);
            }
        }
    
    return arr1
}

// Example
console.log(subint(1, [1, 11, 34, 52, 61]));
// should print: `[0, 1, 4]`
console.log(subint(9, [1, 11, 34, 52, 61]));
// should print: '[]'
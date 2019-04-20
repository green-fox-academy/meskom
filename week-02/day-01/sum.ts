'use strict';
// Write a function called `sum` that returns the sum of numbers from zero to the given parameter

function sum(a: number): number {
    let b: number = 0;
    for (let i: number = 0; i <= a; i++) {
        b += i
    } 
    return b;
}
console.log(sum(5));
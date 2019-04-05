'use strict';

// Write a program that calculates the sum and the average from 1 to a given number.
// Example input: 5
// Example output: Sum: 15, Average: 3
let a: number=5;
let Sum:number=0;
for (let i:number =1; i<=a; i++){
    Sum=Sum+i
    
}
console.log('Sum: '+ Sum);
console.log('Avg: '+ Sum/a);

// Write a program that asks for a number.
// It would ask this many times to enter an number,
// if all the numbers are entered, it should print the sum and average of these
// numbers like:
//
// Sum: 22, Average: 4.4

var num1 = prompt("Please enter a number: ");
let a: number = 5;
let Sum: number = 0;

for (let i: number = 1; i <= a; i++) {
    Sum = Sum + i

}
console.log('Sum: ' + Sum);
console.log('Avg: ' + Sum / a);

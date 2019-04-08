// Write a function called `sum` that returns the sum of numbers from zero to the given parameter

function sum(a: number): number {
    let b: number = 0;
    for (let i: number = 1; i <= a; i++) {
        b= b+i;
    }; return b;
}
console.log(sum (5));
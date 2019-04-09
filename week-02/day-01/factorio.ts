'use strict';
// -  Create a function called `factorio`
//    that returns it's input's factorial

function factorio(a: number): number {
    let b: number = 1;
    for (let i: number = 1; i <= a; i++) {
        b = b * i;
    }; return b;
}
console.log(factorio(3));
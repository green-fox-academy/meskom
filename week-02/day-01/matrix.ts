'use strict';
// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array
let matrix: number[][] = [];
let row: number = 3;
let col: number = 3;


for (let i: number = 0; i <= row; i++) {
    matrix[i] = [];

    for (let j: number = 0; j <= col; j++) {
        if (i + j == row) {
            matrix[i][j] = 1
        }
        else {
            matrix[i][j] = 0
        }
    }
}
console.log(matrix)
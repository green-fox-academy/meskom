'use strict';
//Write a JS function that generates a Spirally-filled matrix with numbers, 
//with given dimensions.
// The input comes as 2 numbers that represent the dimension of the matrix.
// The output is the matrix filled spirally starting from 1. 
//You need to print every row on a new line, with the cells separated by a space. 
//Check the examples below.

let matrix: number[][] = [];
let row: number = 3;
let col: number = 3;

let a: number = 1;
let start: number = 0;
for (let i: number = start; i < row - start; i++) {
    matrix[start][i] = a++ ;
}
for (let i: number = start + 1; i < col - start; i++)
    matrix[i][col-strt] = a++;

}    
    for (let j: number = 0; j < col; j++) {
        if (i == 0) {
        matrix[i][j] = j + 1
        }
        if ( i != 0 && j == col-1){
            matrix[i][j] = i + j + 1   
        }
        if ( i == row-1 ) {
        matrix[i][j] = 2 * row + col - 2 - j 
    }
    }
}
console.log(matrix)
console.log(matrix.lastIndexOf)


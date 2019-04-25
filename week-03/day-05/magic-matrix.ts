'use strict';


// Write a JS function that checks if a given matrix of numbers is magical. 
//A matrix is magical if the sums of the cells of every row and every column are equal.
// The input comes as an array of arrays, containing numbers (number 2D matrix).
// The input numbers will always be positive.
// The output is a Boolean result indicating whether the matrix is magical or not.

let matrix1m: number[] = [4, 5, 6]
let matrix1: number[][] = [[21, 5, 6], [6, 5, 4], [5, 5, 5]]

let matrix2: number[][] = [[11, 32, 45], [21, 0, 1], [21, 1, 1]]
let matrix3: number[][] = [[1, 0, 0], [0, 0, 1], [0, 1, 0]]
let sumRow: number[] = [];
let sumCol: number[] = [];

//console.log(matrix1[1].map(function(num,i) {num + matrix1[2][i];}))

for (let i: number = 0; i < matrix1.length; i++) {
      sumRow[i] = matrix1[i].reduce(function (accu, a) { return accu + a })
      console.log(matrix1.slice(i))
      //matrix1 [i][j]
      sumCol[i][j] = matrix1[i].map(function(n,i){return n + matrix1[i] }
      
     //  for (let j = 0; j < matrix1.length; j++) {
     //      sumCol.push(matrix1[i][j] + matrix1[i][j]);
     //  }}


console.log('Sum of rows: '+ sumRow);
console.log('Sum of columns: '+ sumCol);

// for (let i: number = 0; i <= 3; i++) {
//      matrix1[i] = rowSum[]  
//      let rsum: number = rowSum.reduce(function(a ,b) {return a + b; })
//      console.log (rsum)
// }
//     colSum[i] = matrix1[i];
//   for (let j: number = 0; j <= 3; j++) 

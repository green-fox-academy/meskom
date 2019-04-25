'use strict';

import { readFileSync } from "fs";

// Write a function that takes a filename as a parameter
// The file contains an ended Tic-Tac-Toe match
// We have provided you some example files (draw.txt, win-x.txt, win-o.txt)
// Return "X", "O" or "Draw" based on the input file
var fs = require ('fs');

function ticTacResult(fn) {
    let fileContent = readFileSync(fn,'utf-8');
    let lines = fileContent.split('\n')
    let matrix = [lines[0].split(''), lines[1].split(''), lines [2].split('')]
    //let row: any[] =[];
    let col = [[matrix[0][0],matrix[1][0],matrix[2][0]],[matrix[0][1],matrix[1][1],matrix[2][1]],[matrix[0][2],matrix[1][2],matrix[2][2]]]
    let diag =[[matrix[0][0],matrix[1][1],matrix[2][2]],[matrix[0][2],matrix[1][1],matrix[2][0]]];
// col array fills with loop-- not working?
        // for ( let i: number = 0; i < 3; i++) {
        //         col[0].push(matrix[i][0])    
        //         col[1].push(matrix[i][1])
        //         col[2].push(matrix[i][2])          
        // } 
// for (let i: number = 0; i <3; i++){
//      if (col[i] == "XXX" || matrix[i] == "XXX" || diag[i] == "XXX")
        return col[1]
    }
    
console.log(ticTacResult('win-o.txt'))
// Should print "O"

//console.log(ticTacResult('win-x.txt'))
// Should print "X"

//console.log(ticTacResult('draw.txt'))
// Should print "Draw"
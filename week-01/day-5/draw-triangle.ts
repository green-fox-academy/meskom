'use strict';

let lineCount: number = 4;

// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is

for (let i: number = 0; i <= lineCount; i++) {
    let line: string = '';
    for (let j: number = 0; j<i; j++) {
    line = (line + '*');    
    }console.log(line);
}

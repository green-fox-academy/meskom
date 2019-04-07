'use strict';

let lineCount: number = 6;

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is
let line: string = '';
for (let i: number = 1; i <= lineCount; i++) {
    line = '';

    for (let j: number = 0; j <= (lineCount - i - 1); j++) {
        line += ' ';
    }
    for (let k: number = 0; k < i; k++) {
        if (k == 0) {
            line += '*';
        }
        else {
            line += '*' + '*';
        }
    }
    console.log(line);
}


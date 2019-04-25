'use strict';

const lineCount = 9;



// Write a program that draws a
// diamond like this:
//
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is

let line: string = '';
for (let i: number = 1; i <= lineCount; i++) {
    line = '';

    for (let j: number = 0; j <= (lineCount - i - 1); j++) {
        line += ' ';
    }
    for (let k: number = 0; k < i; k++) {
        if (k == 0) {
            line = line + '*';
        }
        else {
            line = line + '*' + '*';
        }
    }
    console.log(line);
}
//let line: string = '';    
for (let i2: number = 0; i2 <= lineCount; i2++) {
    line = '';

    for (let j2: number = 0; j2 <= i2; j2++) {
        line += ' ';
    }
    //let j2: number = 0;
    for (let k2: number = 0; k2 <= (lineCount * 2 - 4) - i2 * 2; k2++) {
        line += '*';
    }
    console.log(line);
}
'use strict';

const lineCount = 6;

// Write a program that draws a
// square like this:
//
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is
let line: string = '';
for (let i: number = 1; i <= lineCount; i++) 
{
    line = '';
    
 
 for (let j: number= 1; j <= lineCount; j++){
    if (i == 1 || j == 1 || i == lineCount || j == lineCount ) {
        line = line + 'x';}
    else { line = line + ' ';
    } 
    
}
console.log(line);
}

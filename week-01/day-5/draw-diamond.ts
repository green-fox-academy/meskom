'use strict';

const lineCount = 7;



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
for (let i: number = 1; i <= lineCount; i++) 
{
    line = '';

    for (let j: number = 0; j <= (lineCount-i-1); j++)
    {   
    line += ' ';
    } 
    for (let k: number = 0; k < i; k++) {
        if (k == 0) {
            line = line + '*';
        }
            else {
                line = line + '*'+ '*';
    }
    }    
    console.log(line);
}
//let line: string = '';    
for (let i2: number = 1; i2 <= lineCount-1; i2++) 
{
    line = '' ;

    for (let j2: number = 0; j2 <= (i2); j2++)
    {   
    line = ' ';
    } 
    for (let k2: number = lineCount ; k2 = 0; k2--)
     
        //if (k2 == 0) {
          //  line = '*';
        
    {            line = '*';
    }
    
 
    console.log(line);
}
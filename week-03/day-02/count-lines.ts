'use strict';

// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

var fs:any = require('fs');

function linecount (fn:string) {
    let fileContent = fs.readFileSync(fn, 'utf-8');
    let line = fileContent.split('\n');
    return line.length - 1
}
try{
    console.log (linecount ('linecount.txt'))
}
catch(e){
    console.log ('0')
}

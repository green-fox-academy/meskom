'use strict';
// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0


var fs = require('fs');

//var readMe = fs.readFileSync('readMe.txt', 'utf8');
//console.log(readMe);

let bb:number = 1;

function div (a:number):number {
    return 10 / a }


if ( bb == 0) {
    console.log ('fail')
}
else console.log (div(bb));
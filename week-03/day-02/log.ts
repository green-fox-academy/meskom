'use strict';
// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.

var fs:any = require('fs');
//function logIp(fn2: string)

let fileContent = fs.readFileSync('log.txt', 'utf-8');
let line: string[] = fileContent.split('\n');
//let col:  line.split 
    for ( i = 0 ; i < line.length; i++){
        let ip[] = line[i].split('   ')
        ip.push() 
    }   
console.log(line.length)
console.log(line[4])
/*
try{
copyContent ('my-file.txt', 'Misi.txt')
console.log(true)
}

catch(e){
    console.log (false)
}*/
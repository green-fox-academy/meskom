'use strict';

// Write a program that opens a file called "my-file.txt", then prints
// each line from the file.
// If the program is unable to read the file (for example it does not exist),
// then it should print the following error message: "Unable to read file: my-file.txt"

var fs:any = require('fs');
try{
let fileContent = fs.readFileSync('myfile.txt', 'utf-8');
console.log(fileContent);
}
catch(e){
    console.log ('unable to read: ' + e.path)
}



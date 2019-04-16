'use strict';
// Write a function that is able to manipulate a file
// By writing your name into it as a single line
// The file should be named "my-file.txt"
// In case the program is unable to write the file,
// It should print the following error message: "Unable to write file: my-file.txt"

var fs:any = require('fs');
function writeSingleLine (fileContent:string){
    //let fileContent = 'Misi'
    fs.writeFileSync('my-file.txt', fileContent);
    
    }

try{
writeSingleLine ('Misi')
}
catch(e){
    console.log ('unable to write: ' + e.path)
}
'use strict';

// Write a function that copies the contents of a file into another
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

var fs:any = require('fs');
function copyContent (fn1:string, fn2: string){
    let fileContent = fs.readFileSync(fn1, 'utf-8');
    fs.writeFileSync(fn2, fileContent)
}

try{
copyContent ('my-file.txt', 'Misi.txt')
console.log(true)
}

catch(e){
    console.log (false)
}
'use strict';
// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.

var fs: any = require('fs');

function logIp(fn2: string) {

    let fileContent = fs.readFileSync(fn2, 'utf-8');
    let lines: string[] = fileContent.split('\n');
    let ip: any[] = []
    let arr: any[] = []
    for (let i: number = 0; i < lines.length; i++) {
        arr.push(lines[i].split('   '))
        ip.push(arr[i][1])
    }
    return Array.from(new Set (ip))
}
console.log(logIp('log.txt'));
// Write a function that returns the GET / POST request ratio.

function GetPostIdx(fn2: string) {

    let fileContent = fs.readFileSync(fn2, 'utf-8');
    let lines: string[] = fileContent.split('\n');
    let get: number = 0;
    let post: number = 0;
    for (let i: number = 0; i < lines.length; i++) {
        if (lines[i].indexOf('GET') != -1) {
            get++
        }
        // arr.push(lines[i].split('   '))
        // if (arr[i][2] = 'GET') {
        //     get++}
        if (lines[i].indexOf('POST') != -1) {
            post++
        }
    }
    return 'Get/(All-Get): ' + get/(lines.length-get) +'  Get/Post: ' + get/post
}
console.log(GetPostIdx('log.txt'))

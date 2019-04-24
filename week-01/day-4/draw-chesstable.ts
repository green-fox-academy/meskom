// Crate a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % % 
//  % % % %
let lineCount: number = 8;
let lineLength: number = 8;
let line: string = '';

for (let i: number = 1; i <= lineCount; i++) {
    line = '';

    for (let j: number = 1; j <= lineLength; j++) {
        if (i % 2 == 0 && j % 2 == 0 || i % 2 == 1 && j % 2 == 1) {
            line += ' ';
        }
        else {
            line += 'x ';
        }

    }
    console.log(line);
}
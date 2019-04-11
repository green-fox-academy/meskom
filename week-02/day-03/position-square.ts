'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.


function rect(x: number, y: number, z: number, v: number) {
    ctx.fillStyle = 'red';
    ctx.fillRect(x, y, z, v);
}

let x: number  = 20
let y: number = 11
let z: number = 50
let v: number = 50
//rect(x, y, z, v)


for (let i: number = 1; i <= 4; i++) {
    x = i * 50
    y = i * 30
    
    rect(x, y, z, v)
}

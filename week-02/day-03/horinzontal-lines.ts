'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// create a line drawing function that takes 2 parameters:
// the x and y coordinates of the line's starting point
// and draws a 50 long horizontal line from that point.
// draw 3 lines with that function. Use loop for that.


function goHorizontal (x: number, y: number) {
    ctx.strokeStyle = "red";
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + 500, y);
    ctx.stroke();
}
goHorizontal(100, 200)

//for (let i: number = 1; i <= 3; i++) {
//    x = i * 45
//    y = i * 100
//    goHorizontal(x, y)
//}

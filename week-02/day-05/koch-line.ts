'user strict'
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


function Line (x: number,y: number,s: number) {
    if (s == 0) { 
        return 0;
    }
    else {
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x + s/3, y);
ctx.lineTo(x + s/2, y - (s/2 * Math.sqrt(3)/2);
ctx.lineTo(x + s*(2/3), y);
ctx.lineTo((x + s), y);
ctx.stroke();
return Line (x, y, s)
    }
}

Line(100, 100, 100);


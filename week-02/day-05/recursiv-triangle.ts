'user strict'
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function triangle (x: number, y: number, s: number){
    if (s == 1) { 
        return 0
    }
    {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + s/2, y - (s * Math.sqrt(3)/2));
    ctx.lineTo((x + s), y);
    ctx.lineTo(x, y);
    ctx.stroke(); 
    } return triangle (x+s/4, (y+ (s * Math.sqrt(3)/2)/2, s/2)
 }
triangle (200, 200, 200)


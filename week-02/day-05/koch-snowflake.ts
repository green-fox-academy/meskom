'user strict'
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


function triangle(x: number, y: number, s: number) {

    if (s < 10) {
        return
    }
//1st triangle 
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + s / 2, y - s * Math.sqrt(3) / 2);
    ctx.lineTo((x + s), y);
    ctx.lineTo(x, y);
    ctx.fillStyle = 'black';
    ctx.fill()
    ctx.stroke();
//2. triangle

    ctx.beginPath();
    ctx.moveTo(x, y - s * Math.sqrt(3) / 3);
    ctx.lineTo(x + s, y - s * Math.sqrt(3) / 3);
    ctx.lineTo(x + s / 2, y + s / Math.sqrt(12));
    ctx.lineTo(x, y - s * Math.sqrt(3) / 3);
    //ctx.stroke();
    ctx.fillStyle = 'black';    
    ctx.fill()
    ctx.stroke();
    triangle(x, y, s / 3)
    triangle(x + s * 2 / 3, y, s / 3)
    triangle(x + s / 3, y - s / Math.sqrt(3), s / 3)
    triangle(x, y - s * Math.sqrt(12) / Math.sqrt(81), s / 3)
    triangle(x + s * 2 / 3, y - s * Math.sqrt(12) / 9, s / 3)
    triangle(x + s / 3, y + s * Math.sqrt(3) / 9, s / 3)

}
triangle(150, 300, 350)


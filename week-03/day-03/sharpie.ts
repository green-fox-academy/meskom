'use strict';

class Sharpie {
    color: string;
    width: number;
    inkAmount: number;

    constructor(color: string, width: number, inkAmount: number = 100) {
            this.color = color;
            this.width = width; 
            this.inkAmount = inkAmount;
    }
    use() {
        this.inkAmount--
        console.log( ` using ${this.color +' ' +this.width} and inkAmunt decreased ${this.inkAmount}`);

    }
}
const Sharpie1: Sharpie = new Sharpie('red', 3)
Sharpie1.use()
console.log(Sharpie1) 
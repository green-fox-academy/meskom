'use strict';

class Counter2 {

    count: number;

    constructor (count: number = 4) {
        this.count = count;
    }
        
    add(num: number = 1) : void {
        this.count += num;
        }
    get(): void {
        console.log(` the value: ${this.count}`);
    }
    reset(): void {
        this.count = 0;
    }
}

let firstNum: Counter2 = new Counter2(9);
console.log(firstNum.add());
const secondNum: Counter2 = new Counter2(1);
console.log(secondNum.add());
const thirdNum: Counter2 = new Counter2(2);
console.log(thirdNum.get());
const fourthNum: Counter2 = new Counter2();
fourthNum.reset()
console.log(fourthNum) 




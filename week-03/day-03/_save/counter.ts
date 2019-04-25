'use strict';


class Counter {
    integer: number;

    constructor(integer?: number) {
        if (integer != undefined) 
        {
        this.integer = integer
        }
        else { 
            this.integer = 0
        }
    }

    add(num?: number) : void {
        if (num) {
            this.integer += num
        }

        else {
             this.integer ++
         }
    }
    get(): void {
        console.log(` the value: ${this.integer}`)
    }
    reset(): void {
        this.integer = 0
    }
}
const firstNum: Counter = new Counter(10);
console.log(firstNum.add(10));
const secondNum: Counter = new Counter(1);
console.log(secondNum.add())
const thirdNum: Counter = new Counter(2);
console.log(thirdNum.get());
const fourthNum: Counter = new Counter();
fourthNum.reset()
console.log (fourthNum) 




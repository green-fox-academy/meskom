'user strict'

//Write a recursive function that takes one parameter: n and adds numbers from 1 to n.

function numAdd (n:number): number {
    if (n<=0) { 
        return 0;
    }
    return n + numAdd(n-1);

}
console.log ('sum: ' + numAdd(6));
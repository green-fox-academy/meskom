'use strict';
// -  Create a variable named `abc` with the following content: `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `abc`

let abc = ['Arthur', 'Boe', 'Chloe'];

abc.splice(0, 0, abc[2]);
abc.splice(2, 0, abc[1]);
abc.splice(1, 1);
abc.splice(3, 1);
function printParams(a: any[]) {
    a.forEach(function (item: any, index: any) {
        console.log(item);
    });
}

console.log(printParams(abc))



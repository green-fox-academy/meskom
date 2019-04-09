// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)

//function printParams ([a]) {console.log a.forEach}
let a = [1, 1, 1, 1, 2, 2];
function printParams(a: number[]) {
    a.forEach(function (item: any, index: any) {
        console.log(item);
    });
}

console.log(printParams(a))
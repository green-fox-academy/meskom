// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)

let a: number[] = [1, 1, 1, 1, 2, 2];
function printParams (p: number[]): void {
    p.forEach(function (item: any, index: any) {
        console.log(item);
    });
}
printParams(a)
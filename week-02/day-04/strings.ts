'user strict'

// Given a string, compute recursively (no loops) 
//a new string where all the lowercase 'x' chars have been changed to 'y' chars.


function XchnY(str: string): string {

    if (str.indexOf('x') !== -1) {
       str = str.replace('x', 'y');
        return XchnY(str)
    }
    else {
        return str
    }
}
console.log(XchnY('xhnxnnxkjkjkjxjkjkx'))


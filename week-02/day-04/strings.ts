'user strict'

// Given a string, compute recursively (no loops) 
//a new string where all the lowercase 'x' chars have been changed to 'y' chars.

let a: string[] = ['howxManyXxxx'];

function XchnY (str:string): string {
    if (str.indexOf('x') == -1 ){
        return str
    }
    else {
        return str.replace('x', 'y')
    }
}
    console.log (XchnY('xhnxnnxkjkjkjxjkjkx'))


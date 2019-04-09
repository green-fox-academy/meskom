let str: string[] = [];

str.push('williams')

console.log(str == []);
str.push('Jhon')
str.push('Amanda')
console.log(str.length);
console.log(str[2]);

str.forEach (function(e) {
        console.log(e);
    });
for (let i: number = 0; i < str.length; i++) {
    console.log(i+1 + '. ' + str[i])
}    
str.splice(1,1)
console.log(str)
str.reverse().forEach (function(e) {
    console.log(e);
});







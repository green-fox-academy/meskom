let obj: any = {}

obj[97]='a';
obj[98]='b'; 	
obj[99]='c';
obj[65]='A';
obj[66]='B';
obj[67]='C';

console.log (obj);

console.log(Object.values(obj));
console.log(Object.keys(obj));
obj[68]='D';
console.log(Object.keys(obj).length)
console.log(Object.values(obj).length)
console.log(obj[99])
delete obj[97]; 
console.log (obj);
console.log(obj.hasOwnProperty([100]));
console.log(obj.hasOwnProperty([99]));
obj = {}
console.log (obj);

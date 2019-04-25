import {Apple} from 
var test = require('tape');test("Class Test", (t:any) => {
 let apple = new Apple();
 t.equal(apple.getApple(), 'apple');
 t.end();
});
// var test = require('tape');test("Math test", (t:any) => {
//     t.equal(4, 2 + 2);
//     t.true(5 > 2 + 2);    t.end();
//  });
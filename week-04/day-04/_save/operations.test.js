let tape = require ('tape');
let test = tape.test;
let operations =  require ('./operations.js');

test('add 2 numbers', t => {
  const actual = operations.addNum(1, 2);
  const expected = 3;

  t.equal(actual, expected);
  t.end();
});


test('subtract 2 numbers', t => {
   t.equal(operations.subtractNum(2, 1), 1);
   t.end();
 });
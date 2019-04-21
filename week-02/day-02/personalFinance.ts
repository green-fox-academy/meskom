'use strict';
//Create a list with the following items.
//   500, 1000, 1250, 175, 800 and 120
let cost: number[] = [500,1000, 1250, 175, 800, 120];


// How much did we spend?
// Which was our greatest expense?
// Which was our cheapest spending?
// What was the average amount of our spendings?
let spend = cost.reduce(function(acc,a){return acc + a});
console.log(spend);
//console.log(Math.max(cost));
console.log(cost.sort(function(a,b){return b -a})[0])
console.log(cost.sort(function(a,b){return a -b})[0])
console.log(spend/cost.length)


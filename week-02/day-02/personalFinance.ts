'use strict';
//Create a list with the following items.
//   500, 1000, 1250, 175, 800 and 120
let cost: number[] = [500,1000, 1250, 175, 800, 120];


// How much did we spend?
// Which was our greatest expense?
// Which was our cheapest spending?
// What was the average amount of our spendings?
function finCalc (arr: number[]) {
let spend = arr.reduce(function(acc,a){return acc + a});
//console.log(spend);
//console.log(Math.max(cost));
let max = arr.sort(function(a,b){return b -a})[0]
let min = arr.sort(function(a,b){return a -b})[0]
let avg = spend/cost.length
console.log( 'you spend: '+ spend + '\n max cost:' + max +' \n min cost: ' + min + '\n avg. cost: '+ avg )
}
finCalc(cost)

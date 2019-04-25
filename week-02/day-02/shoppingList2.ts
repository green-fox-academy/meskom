'use strict';

const prices = {
  Milk: 1.07,
  'Rice': 1.59,
  Eggs: 3.14,
  Cheese: 12.60,
  'Chicken Breasts': 9.40,
  Apples: 2.31,
  Tomato: 2.58,
  Potato: 1.75,
  Onion: 1.10,
};

const bobsList = {
  Milk: 3,
  Rice: 2,
  Eggs: 2,
  Cheese: 1,
  'Chicken Breasts': 4,
  Apples: 1,
  Tomato: 2,
  Potato: 1,
};

const aliceList = {
  Rice: 1,
  Eggs: 5,
  'Chicken Breasts': 2,
  Apples: 1,
  Tomato: 10,
};


// How much does Bob pay?
function pay(productsList: any, prices: any) {
  let result = 0;
  const products = Object.keys(productsList);
  for (let i: number = 0; i < products.length; i++) {
    const product = products[i]
    const productPrice = prices[product] * productsList[product]
    result += productPrice
  }
  return result
}
console.log(' Value of Bob\'s basket: ' + pay(bobsList, prices))

// How much does Alice pay?

console.log(' Value of Alice\'s basket: ' + pay(aliceList, prices))

// Who buys more Rice?

function whoBuysMore(list1: any, list2: any, item: any) {
  let result = 'N/A';
  if (list1[item] > list2[item]) {
    result = 'MORE ';
  }
  else { result = 'LESS (or same) ' }

  return (result + item + ' in the first List (list1)')
}
//   let result = 'N/A';
//   if (list1[item] > list2[item]) {
//     result = 'list1'
//   }
//   if (list1[item] < list2[item]) {
//     result = 'list2'
//   }
//   else {
//     result = 'same';
//   }
//   return result
// }
console.log(whoBuysMore(bobsList, aliceList, 'Rice'))


// Who buys more Potato?
console.log(whoBuysMore(bobsList, aliceList, 'Potato'))
// Who buys more different products?
console.log('---------')

function whoBuysMoreDiffProduct (list1: any, list2: any): any {
(Object.keys(list1).length) > (Object.keys(list2).length) ?
 ('List1 longer') : ('List2 longer (or same)')
}

//(a > b) ? 

console.log(whoBuysMoreDiffProduct(bobsList,aliceList))
// Who buys more products? (piece)

function whoBuysMoreProduct (list1: any, list2: any) {
  return Object.values(list1).reduce(function(acc,a) {return acc + a})
//   let sum1: any = 0;
//   let sum2: any = 0;
//   const b = Object.values(list1)
//   const a = Object.values(list1)
//    for (let i: number = 0; i < b.length; i ++ ){
//      sum1 += b[i];
//      sum2 += a[i]

//    }
// return sum1 + sum2
}

console.log(whoBuysMoreProduct(bobsList,aliceList))
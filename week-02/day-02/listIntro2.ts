'use strict';

const listA = ['Apple', 'Avocado', 'Blueberries', 'Durian', 'Lychee'];
const listB = listA;

console.log (listA.indexOf('Durian') !== -1 ? 'Durian in the list': ' No durian in the list') 
listB.splice(listB.indexOf('Durian'),1)
console.log (listB.indexOf('Durian') !== -1 ? 'Durian in the list': 'No durian in the list')
console.log(listA);
listA.splice(3,0,'Kiwi')
console.log(listA);
console.log(listB);
console.log(listA.length > listB.length ? 'list A longer than B' : 'list A not longer than B' )
console.log('Avocado\'s index: ' + listA.indexOf('Avocado'))
console.log('Durian\'s index: ' + listB.indexOf('Durian'))
listB.push('PassionFruit')
listB.push('Pummelo')
console.log(listB)
console.log(listA[2]);


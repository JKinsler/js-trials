"use strict";


// 1. printIndices
function printIndices(items) {
  for (const i in items) {
    console.log(items[i], i);
  }
}


// 2. everyOtherItem
function everyOtherItem(items) {
  // Replace this with your code
const result = [];

  for (const i in items) {
    if (i % 2 === 0){
      result.push(items[i]);
    }
  }
  console.log(result);
}


// 3. smallestNItems
function smallestNItems(items, n) {
  // Replace this with your code
  const sorted = items.sort((a, b) => a - b);
  const sliced = sorted.slice(0, n);
  const reversed = sliced.reverse();
  console.log(reversed);
}

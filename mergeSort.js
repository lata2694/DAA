
"use strict"
// array is divided into two lists from center recursivley and mergerd.
let inputArray = [10, 7, 15, 25, 32, 20, 3, 12];
const N = inputArray.length-1;


function merge (left, right) {
  let resultArray = [], leftIndex = 0, rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) { // O(n)
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // We need to concat here because there will be one element remaining
  // from either left OR the right
  return resultArray
          .concat(left.slice(leftIndex))
          .concat(right.slice(rightIndex));
}

function mergeSort (unsortedArray) {
  if (unsortedArray.length <= 1) {
    return unsortedArray;
  }
  const middle = Math.floor(unsortedArray.length / 2);

  const left = unsortedArray.slice(0, middle);
  const right = unsortedArray.slice(middle);

  return merge(mergeSort(left), mergeSort(right)); // 2*t(n/2)+O(n)
}

console.log('Sorted array is : ', mergeSort(inputArray)); // O(nlogn)







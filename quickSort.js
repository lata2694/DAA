
"use strict"

/* all the element to left of pivot will be less than it. To the right will be greater than pivot element. 
  Partition of array
  Sorting of left and right array
*/

let a = [10, 7, 15, 25, 32, 20, 3, 12];
const N = a.length-1;

function partition(array, pivot) {
  let i, j = -1, n = array.length-1;
  for(i=0; i<= n; i++) { // O(n)
    if(array[i] <= pivot) {
      j += 1;
      array[i] = array[j] + (array[j] = array[i], 0 );
    } else continue; 
  }
  return array;
}

function quickSort() {
  let pivot = a[N];
  let _a = partition(a, pivot); 
  let divide = _a.indexOf(pivot);
  let leftArray = _a.slice(0, divide), rightArray = _a.slice(divide+1, N);
  return [...partition(leftArray, leftArray[leftArray.length-1]), pivot, ...partition(rightArray, rightArray[rightArray.length-1])];
}

console.log('Sorted array is : ', quickSort());
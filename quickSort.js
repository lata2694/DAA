
"use strict"

/* all the element to left of pivot will be less than it. To the right will be greater than pivot element. 
  Partition of array
  Sorting of left and right array
*/

let a = [100, 750, 150, 250, 230, 20, 130, 102];
const N = a.length-1;
let pivot = 0;

function partition(array, low, high) {
  let i, j = low-1, pivot = array[high];
  for(i=low; i<= high-1; i++) { // first to second last : O(n)
    if(array[i] <= pivot) {
      j += 1;
      array[i] = array[j] + (array[j] = array[i], 0 );
    } else continue; 
  }
  array[j+1] = array[high] + (array[high] = array[j+1], 0 );
  return j+1;
}

function quickSort(array, low, high) {
  if(low<high) {
    pivot = partition(array, low, high);
    
    quickSort(array, low, pivot-1); // O(n/2)
    quickSort(array, pivot+1, high); // O(n/2)
  }
  return array;
}

console.log('Sorted array is : ', quickSort(a, 0, N)); //O(nlogn)-O(n^2)
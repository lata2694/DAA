"use strict"

let inputArray = [10, 7, 15, 25, 32, 20, 20, 3, 12];
const N = inputArray.length;

function selectionSort() {
  let i, j, min_indx, tmp;
  for(i=0; i<N; i++) {
    min_indx = i;
    for(j=i+1; j<N; j++) {
      if(inputArray[j] < inputArray[min_indx]) {
        min_indx = j;
      }
    }
  let i, j, min_indx, temp;
    tmp = inputArray[min_indx];
    inputArray[min_indx] = inputArray[i];
    inputArray[i] = tmp;
  }
}

selectionSort();

console.log('Sorted array is : ', inputArray);
"use strict"

let inputArray = [10, 7, 15, 25, 32, 20, 3, 12];
const N = inputArray.length;

function selectionSort() {
  let i, j, min_indx;
  for(i=0; i<N; i++) { // O(N)
    min_indx = i;
    for(j=i+1; j<N; j++) { // O(N)
      if(inputArray[j] < inputArray[min_indx]) { // O(1)
        min_indx = j; // O(1)
      }
    }
    // swapping
    inputArray[min_indx] = inputArray[i] + (inputArray[i]=inputArray[min_indx], 0); // O(1)
    /* (inputArray[i]=inputArray[min_indx], 0); will set inputArray[i] to inputArray[min_indx] and yeild 0.
     inputArray[i] + 0 will set inputArray[min_indx] to old value of inputArray[i] */
  }
}

selectionSort(); // O(n^2)

console.log('Sorted array is : ', inputArray);
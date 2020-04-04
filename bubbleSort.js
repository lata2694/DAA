"use strict"

// two adjacent elements are compared and sorted till whole array is sorted
let inputArray = [10, 7, 15, 25, 32, 20, 3, 12];
const N = inputArray.length;

function bubbleSort() {
  let i, j, flag;
  for(i=0; i<N-1; i++) { // O(N)
    flag = 0;
    for(j=0; j<N-i-1; j++) { // O(N)
      if(inputArray[j] > inputArray[j+1]) { // O(1)
        // swapping
        inputArray[j+1] = inputArray[j] + (inputArray[j]=inputArray[j+1], 0); // O(1)
        flag  = 1;
      }
    }
    if(flag === 0) break; // O(1)
  }
}

bubbleSort(); // O(n^2)

console.log('Sorted array is : ', inputArray);
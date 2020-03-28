"use strict"

let inputArray = [10, 7, 15, 25, 32, 20, 3, 12];
const N = inputArray.length;

function bubbleSort() {
  let i, j, flag;
  for(i=0; i<N; i++) { // O(N)
    flag = 0;
    for(j=i+1; j<N; j++) { // O(N)
      if(inputArray[j] < inputArray[i]) { // O(1)
        // swapping
        inputArray[j] = inputArray[i] + (inputArray[i]=inputArray[j], 0); // O(1)
        /* (inputArray[i]=inputArray[min_indx], 0); will set inputArray[i] to inputArray[min_indx] and yeild 0.
        inputArray[i] + 0 will set inputArray[min_indx] to old value of inputArray[i] */
        flag  = 1;
      }
    }
    if(flag === 0) break;
  }
}

bubbleSort(); // O(n^2)

console.log('Sorted array is : ', inputArray);
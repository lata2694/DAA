
"use strict"

let inputArray = [10, 7, 15, 25, 32, 20, 3, 12];
const N = inputArray.length-1;

function insertionSort() {
  let i, j;
  for(i = 0; i<N; i++) { //O(N-1)
    if(inputArray[i] > inputArray[i+1]) { //O(1)
      j=i;
      while(j>=0 && a[j] > a[j+1]) { //O(N-i)
        a[j+1] = a[j] + (a[j]=a[j+1], 0); //O(1)
        j--; //O(1)
      }
    } else continue; //O(1)
  }
}

insertionSort(); // O(n)-O(n^2)

console.log('Sorted array is : ', inputArray);
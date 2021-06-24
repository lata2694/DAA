/* Sliding window: 
Given an array find the subarray which has sum less than xor equal to a given value/sum 
*/

const numbers = [7, 1, 3, 2, 4, 5, 1, 1, 1, 1, 1], sum = 6;

const findSubArray = (arr, sum) => {
  let subArrayIndex = [], end = 0, start = 0, windowSum = 0;
  
  for (end; end < arr.length; end++) {
    windowSum += arr[end];
    while(windowSum > sum) {
      windowSum -= arr[start];
      start += 1;
    }
    if(windowSum <= sum && start !== end && start < end) {
      subArrayIndex.push(start, end);
    }
  } 
  
  return subArrayIndex;
}


console.log("Calling findSubArray... ", findSubArray(numbers, sum));
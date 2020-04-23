/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Follow up:

If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
*/

const arr = [-2,1,-3,4,-1,2,1,-5,4];

let maxSubArraySum = function(nums) {
  let max_so_far= -Infinity, max_ending_here = 0; 

  for (let i = 0; i <= nums.length-1; i++) { 
    max_ending_here = max_ending_here + nums[i]; 
    if (max_so_far < max_ending_here) 
      max_so_far = max_ending_here; 

    if (max_ending_here < 0) 
      max_ending_here = 0; 
  } 
  return max_so_far; 
};

console.log(maxSubArraySum(arr))

//////////////////////////////////////////////////////////////////////////////////////////////////////////

function subArray(a) {
  let max_so_far= -Infinity, max_ending_here = 0, i=0, start = 0, end = 0, s = 0;
  
  for(i; i<=a.length-1; i++) {
     max_ending_here = max_ending_here + a[i];
    if (max_so_far < max_ending_here) 
        { 
            max_so_far = max_ending_here; 
            start = s; 
            end = i; 
        } 
  
        if (max_ending_here < 0) 
        { 
            max_ending_here = 0; 
            s = i + 1; 
        } 
  }
  return a.splice(start, end-1);
}

console.log(subArray(arr));

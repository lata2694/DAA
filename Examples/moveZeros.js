// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:
// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Note:
// 1. You must do this in-place without making a copy of the array.
// 2. Minimize the total number of operations.

function countZero(nums) {
  let count=0, i=0, n=nums.length-1;
  for(i=0; i<n; i++) {
    if(nums[i]===0 && i!==n) 
      count+=1;
    if(nums[i]===0 && i==n) {
      count-=1;
      n-=1;
    }
  }
  return{
    count: count,
    iterate:n,
  }
}
var moveZeroes = function(nums) {  
  let record = countZero(nums);
  while(record.count){
    for(let i=0; i<record.iterate; i++) {
      if(nums[i]==0)
        nums[i+1] = nums[i] + (nums[i]=nums[i+1], 0);
    }
    record.count-=1;
    record.iterate-=1;
  }
};
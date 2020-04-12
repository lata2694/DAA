let arr = [5,7,2,9,4,1,6,8,0,3];
const find = 6;
const n = arr.length-1;

function binarySearch(arr, left, right) {
  let found;
  if(right <= left) {
    found='Element not dound'; 
  }
  let mid = Math.floor((left+right)/2);
  if(arr[mid]===find){
    found = mid+1;
  } else if(find > arr[mid]) {
    return binarySearch(arr, mid+1, right); // O(n/2^k)
  } else {
    return binarySearch(arr, left, mid-1); // O(n/2^k)
  }
  return found;
}

console.log(`${find} is located at: ${binarySearch(arr.sort(), 0, n)}`); // O(logn)
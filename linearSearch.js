let arr = [5,7,2,9,4,1,6,8,0,3];
const find = 6;

function linearSearch(ele) {
  let found = 0, i = 0;
  for(i; i<=arr.length-1; i++) {
    if(arr[i]===ele) {
      found = i+1;
      break;
    }
  }
  return found;
}

console.log(`${find}, is found at: ${linearSearch(find)}`); // O(n)
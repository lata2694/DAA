let a = [1,14,10,8,7,9,3,2,4,6];
let n = a.length;
function maxHeapify(a,i) { 
  let l = i*2, r = (i*2)+1; largest=i;
  if(i==0) {
    l = 1; r = 2; largest=1;
  }  
  if(l<=n && a[l]>a[i])
    largest = l;
  if(r<=n && a[r]>a[largest])
    largest = r;
  if(largest !== i) {
    a[largest] = a[i] + (a[i]=a[largest], 0);  
    console.log('a = ',a);   
    
    maxHeapify(a,largest);
  }
  
}

function buildMaxHeap(a) {
  let i;
  for(i=Math.floor(n/2); i>=0; i--) {
    maxHeapify(a,i);
  }
}
buildMaxHeap(a); //O(logn)
console.log('Max heap = ',a); 
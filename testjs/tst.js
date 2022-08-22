const arr = [1, 3, 4, 55, 6, 7, 38, 9];

function search(arr, item){
  arr.sort((a,b)=>a - b);
  let start = 0;
  let end = arr.length - 1;
  let mid;
  while(start <= end){
    mid = Math.round((end - start)/2) + start;
    if (item == arr[mid]){
      return mid;
    } else if (item < arr[mid]){
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
   return -1;
}


console.log(search(arr, 55));


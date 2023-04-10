//finding max function
function myArrayMax(arr) {
    let len = arr.length;
    let max = -Infinity;
    while (len--) {
      if (arr[len] > max) {
        max = arr[len];
      }
    }
    return max;
  } 
let arr=[1,20,58,68,12,34,21,85];
const a=myArrayMax(arr);
console.log(a);
//finding min function
function myArrayMin(arr) {
    let len = arr.length;
    let min = Infinity;
    while (len--) {
      if (arr[len] < min) {
        min = arr[len];
      }
    }
    return min;
  } 
  const b=myArrayMin(arr);
  console.log(b);
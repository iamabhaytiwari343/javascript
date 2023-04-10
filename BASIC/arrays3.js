//The sort() method sorts an array alphabetically
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits);
//The reverse() method reverses the elements in an array
fruits.reverse();
console.log(fruits);
//By default, the sort() function sorts values as strings
const points1 = [40, 100, 1, 5, 25, 10];
points1.sort(function(a, b){return a - b});
console.log(points1);
//sorting in random order
const points2 = [40, 100, 1, 5, 25, 10];
points2.sort(function(){return 0.5 - Math.random()});
console.log(points2);
//fisher yates method
const points = [40, 100, 1, 5, 25, 10];
for (let i = points.length -1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i+1));
  let k = points[i];
  points[i] = points[j];
  points[j] = k;
}
console.log(points);
//max and min of array
function myArrayMax(points) {
    return Math.max.apply(null, points);
  }
  let a=myArrayMax(points);
  function myArrayMin(points) {
    return Math.min.apply(null, points);
  }  
  let b=myArrayMin(points);
  console.log(a+"     "+b);
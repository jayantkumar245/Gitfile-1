// 1. Find sum of an array and display the output . Example [10,4,5,2,5,6,9].
let array = [1, 2, 3, 4];
let sum = 0;
for (let i = 0; i < array.length; i++) {
  sum += array[i];
}
console.log(sum);

// 2.Find average of an array and display the output.
const average = (array) => array.reduce((a, b) => a + b) / array.length;
console.log(average([1,2,3,4,5]));


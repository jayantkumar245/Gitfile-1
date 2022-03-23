// 1. Find sum of an array and display the output . Example [10,4,5,2,5,6,9].
let array = [10, 4, 5, 2, 5, 6, 9];
let sum = 0;
for (let i = 0; i < array.length; i++) {
  sum += array[i];
}
console.log(sum);

// 2.Find average of an array and display the output.
const average = (array) => array.reduce((a, b) => a + b) / array.length;
console.log(average([1, 2, 3, 4, 5]));

// 3.Find maximum and minimum of an array.
let array1 = [4, 7, 8, 9, 3, 4, 5];
let maximum = Math.max(...array1);
let minimum = Math.min(...array1);
console.log(`${maximum} is maximum, ${minimum} is minimum`);

// 4.Find Median and Mode of an array.
//        Median : (N+1/2)th term.
//        Mode : Most repeating term

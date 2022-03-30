// easy
// 1. Given a and b, your function should return the value of ab
function power(a, b) {
  return a ** b;
}
let result = power(2, 3);
console.log(result);

// 2. Given length of a regular hexagon, your function should return area of the hexagon.
function areaofHexagon(a) {
  return ((3 * 1.732) / 2) * a ** 2;
}
let result1 = areaofHexagon(10);
console.log(result1);

// 3. Given a sentence, your functions should return the number of words in the sentence.
function noOfWords(str) {
  return str.split(" ").length;
}
let result3 = noOfWords("i am good person");
console.log(result3);

//  4.  Given n numbers, your function should return the minimum of them all. The number of parameters won't be accepted from user.
function findMin(Array) {
  return Math.min(...Array);
}
let res9 = findMin([2, 5, 7, 1]);
console.log(res9);
//   5.Given n numbers, your function should return the maximum of them all. The number of parameters won't be accepted from user.
function findMax(Array) {
  return Math.max(...Array);
}
let res10 = findMax([2, 5]);
console.log(res10);
//   6. Given three angles of a triange, your function should return if it is a scalen, isosceles, equilateral triangle or not a triangle at all.
function typeOfTriangle(a, b, c) {
  if (a == b && b == c) {
    console.log(`Equilateral Triangle`);
  } else if (a == b || b == c || c == a) {
    console.log(`Isosceles Triangle`);
  } else if ((a != b) != c) {
    console.log(`Scalene Triangle`);
  }
}
let result4 = typeOfTriangle(30, 60, 90);

// Medium
// 1. Given an array, your function should return the length of the array.
function arrayLength(arr) {
  return arr.length;
}
let result5 = arrayLength([1, 5, 3, 7, 8, 9]);
console.log(result5);

//  2.Given an array and an item, your function should return the index at which the item is present.
function findIndex(Array, item) {
  return Array.indexOf(item);
}
let res = findIndex([1, 6, 3, 5, 8, 9], 3);
console.log(res);

// 3. Given an array and two numbers, your function should replace all entries of first number in an array with the second number.
function replaceArray(Array, item1, item2) {
  return Array.toString().replace(item1, item2);
}
let res1 = replaceArray([1, 5, 3, 5, 6, 8], 5, 10);
console.log(Array(res1));

// 4.Given two arrays, your function should return single merged array.
function mergearray(arr1, arr2) {
  return arr1.concat(arr2);
}
let arr3 = mergearray([1, 3, 5], [2, 4, 6]);
console.log(arr3);

// 5.Given a string and an index, your function should return the character present at that index in the string.
function findCharAt(str, index) {
  return str.charAt(index);
}
let res2 = findCharAt("skillsafari", 5);
console.log(res2);

// 6.Given two dates, your function should return which one comes before the other.

//   advanced
// 1.Write a function which generates a secret code from a given string, by shifting characters of alphabet by N places.

// 2.Given a sentence, return a sentence with first letter of all words as capital.
function toSentenceCase(str) {
  const words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }
  return words.join(" ");
}
let res3 = toSentenceCase("we are alchemyst");
console.log(res3);

// const toTitleCase = (phrase) => {
//   return phrase
//     .toLowerCase()
//     .split(" ")
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(" ");
// };
// let result = toTitleCase("maRy hAd a lIttLe LaMb");
// console.log(result);

// 3.Given an array of numbers, your function should return an array in the ascending order.

function sortArray(array) {
  return array.sort(function (a, b) {
    return a - b;
  });
}
let res4 = sortArray([100, 83, 32, 9, 45, 61]);
console.log(res4);
// 4.Given a sentence, your function should reverse the order of characters in each word, keeping same sequence of words.
function reverseCharactersOfWord(string) {
  return string
    .split(" ")
    .map(function (word) {
      return word.split("").reverse().join("");
    })
    .join(" ");
}
let res5 = reverseCharactersOfWord("we are alchemyst");
console.log(res5);

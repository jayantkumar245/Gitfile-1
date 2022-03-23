// 1.Write a program to input 2 numbers and display the sum of the numbers to the console.
// let number1 = 20,
//   number2 = 40;
// let sum = number1 + number2;
// console.log(`sum: ${sum}`);

// 2.Write a JavaScript program to calculate the simple interest given P,R,T with the given formula. Formula: SI = (P * T * R) / 100 Where: P = principal amount T = time R = rate SI = simple interest
let p = 100,
  t = 2,
  r = 6,
  SI = (p * r * t) / 100;
console.log(SI);

// 3.Write a program to calculate the kinetic energy of a body with mass 'm' and volume 'v'.
let m = 12,
  v = 2,
  Formula = 0.5 * m * v * v;
console.log(Formula);

// 4.Write a program to convert Fahrenheit to Celsius. For Fahrenheit to Celsius conversion use: T = (T - 32) 9/5 'T' is the temperature on the Fahrenheit scale.
let temp = 56;
let result = (temp - 32) * (5 / 9);
console.log(result);

// 5.Calculate the area, perimeter of a s1.re of side 'a'. Also, calculate the surface area and the volume of a cube of side 'a'.
let a = 4,
  Area = a * a,
  Perimeter = 4 * a,
  Surfacearea = 6 * a * a,
  Volume = a * a * a;
console.log(`${Area},${Perimeter},${Surfacearea},${Volume}`);

// 6.Given the Cost Price(CP) and Selling Price(SP) of a product. Write a Program to Calculate the Profit or Loss.
let cp = 1500,
  sp = 2000;
Profit = sp - cp;
console.log(`${Profit} Profit`);

let CP = 3125,
  SP = 1125;
loss = CP - SP;
console.log(`${loss} Loss`);

// 7.Write a program to calculate sum of N natural digits, as input by the users?
// let naturalNum = prompt(`Enter a positive Integer: `);
// let sum = 0;
// for (let i = 1; i <= naturalNum; i++) {
//   sum += i;
// }
// console.log(`Sum: ${sum}`);

// 8.Write a Program to Print N Odd Number in Descending Order.
// let n = parseInt(prompt("Enter a number:"));
// for (i = n - 1; i >= 0; i--) {
//   a = 1 + i * 2;
//   console.log(a);
// }

// 9.Write a JavaScript program to compute the sum of all digits that occur in a given string.
// let value = 2568,
//   sum = 0;
// while (value) {
//   sum += value % 10;
//   value = Math.floor(value / 10);
// }
// console.log(sum);

// 10.Write a JavaScript program that reverses a number.
// let num=456789;
// reverse=num.toString().split("").reverse().join("")
// console.log(reverse); 

// program to convert decimal to binary
const number = parseInt(prompt("Enter a decimal number: "));
const result1 = number.toString(2);
console.log("Binary:" + " " + result1);

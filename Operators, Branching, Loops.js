// Easy
    //   1.Write a program to add 5 numbers. The value of numbers are num1=5, num2=13, num3=7, num4=21 and num5=48.
      function add(x1, x2, x3, x4, x5) {
        return x1 + x2 + x3 + x4 + x5;
      }
      let sum = add(5, 13, 7, 21, 48);
      console.log(sum);

      // 2.Write a program to take a number input from user and determine whether the number is odd or even.

        let num = prompt(`Enter a Number: `);
        if (num % 2 == 0) {
          console.log(`${num} is a even Number`);
        } else {
          console.log(`${num} is a odd Number`);
        }

      // 3.write a program to find the maximum and minimum out of two given numbers. The numbers are num1=129 and num2=251.
        let num1 = 129,
          num2 = 251;
        if (num1 > num2) {
          console.log(`${num1} is maximum`);
        } else {
          console.log(`${num2} is maximum`);
        }

      // 4.Write a program to find the maximum out of three given numbers. The numbers are num1=8, num2=23 and num3=17.
        let num1 = 8,
          num2 = 23,
          num3 = 17;
        if (num1 > num2 && num3) {
          console.log(`${num1} is maximum`);
        } else if (num2 > num1 && num3) {
          console.log(`${num2} is maximum`);
        } else {
          console.log(`${num3} is maximum`);
        }

      // 5.Write a program to find the minimum out of three given numbers. The numbers are num1=35, num2=29 and num3=46.
        let num1=35, num2=29,num3=46.
        if (num1 < num2 && num3) {
          console.log(`${num1} is minimum`);
        } else if (num2 < num1 && num3) {
          console.log(`${num2} is minimum`);
        } else {
          console.log(`${num3} is minimum`);
        }

      // 6.Write program to take a month as an input from the user and find out whether the month has 31 days or not.
        let month = prompt(`Enter a Month:`);
        if (month > 12) {
          console.log(`month is less than 12`);
        } else if (month == 2) {
          console.log(`month with 28 days`);
        } else if ((month == 4, 6, 9, 11)) {
          console.log(`month with 30 days`);
        } else {
          console.log(`month with 31 days`);
        }

      // Intermediate
      // 1.Fizzbuzz - Write a program to return an array from 1 to 100. But for every multiple of 3, replace the number with "Fizz", for every multiple of 5, replace the number with "Buzz" and for every multiples of 3 & 5, replace with "FizzBuzz".
      // Your output should look something like this 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, 17 .....
     
      let array = "";
      for (let i = 1; i <= 100; i++) {
        if (i % 15 == 0) {
          array += `FizzBuzz${" "}`;
        } else if (i % 5 == 0) {
          array += `Buzz${" "}`;
        } else if (i % 3 == 0) {
          array += `Fizz${" "}`;
        } else {
          array += `${i}${" "}`;
        }
      }
      document.write(Array(array));

      // 2. Print the following star pattern :-
      // *
      // * *
      // * * *
      // * * * *
      // * * * * *

      let star="";
      for (let i = 1; i <= 5; i++) {
          for (let j = 0; j < i; j++) {
            star+="*";
          }
          star+="\n"
      }
      console.log(star)

      // 3.Write a program to take a number input from user and print multiplication table 12 times for that number.

      let x = prompt(`Enter a Number: `);
      for (let i = 1; i <= 12; i++) {
        let y = x*i
        console.log(`${x}*${i}=${y}`);
      }

      // 4.Write a program to return a Fibonacci series : 0,1,1,2,3,5,8,13,21....
      let x = prompt(`Enter a number: `);
      let x1 = 0,
        x2 = 1,
        nextterm;
      console.log("Fibonacci Series:");
      for (let i = 1; i <= x; i++) {
        console.log(x1);
        nextTerm = x1 + x2;
        x1 = x2;
        x2 = nextTerm;
      }

      // 5.Write a program to take an input from a user and find its Factorial. Example: Factorial of 5 is 120
      const number = parseInt(prompt("Enter a positive integer: "));
      if (number < 0) {
        console.log("Error! Factorial for negative number does not exist.");
      } else if (number === 0) {
        console.log(`The factorial of ${number} is 1.`);
      } else {
        let fact = 1;
        for (i = 1; i <= number; i++) {
          fact *= i;
        }
        console.log(`The factorial of ${number} is ${fact}.`);
      }

      // 6.Write a Program to take a number input from user and find if the number is Prime or not.
      const number = parseInt(prompt("Enter a positive number: "));
      let isPrime = true;
      if (number === 1) {
        console.log("1 is neither prime nor composite number.");
      } else if (number > 1) {
        for (let i = 2; i < number; i++) {
          if (number % i == 0) {
            isPrime = false;
            break;
          }
        }
        if (isPrime) {
          console.log(`${number} is a prime number`);
        } else {
          console.log(`${number} is a not prime number`);
        }
      }

      // 7.Write a program to take a day as an input and determine whether it is a weekday or weekend.
      var d = new Date();
      var n = d.getDay();
      if (n === 6 || n === 0) {
        console.log("Its weekend!!");
      } else {
        console.log("Its not weekend");
      }
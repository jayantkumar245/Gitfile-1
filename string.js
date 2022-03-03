// 1. Write a program that converts the string into uppercase

let str = "we are the batch from fsd21e";
let result = str.toUpperCase();
console.log(result);
//  .Write a program that reads two strings and append first string to the second. So if first string is Good second string is Morning , the program should print MorningGood
let str1 = "Good";
let str2 = "Morning";
let str3 = str1 + " " + str2;
console.log(str3);
// 3.Program that reads string and count number of characters present in the string
let string = "we are full-stack developer";
let res = string.length;
console.log(res);
// 4.Write a program that converts string like "124" to 124
let str4 = "124";
console.log(Number(str4));
// 5.Write a program to delete all vowels from a string. Assume string is not more than 80 characters long
function removevowel(str) {
  var strArr = str.split("");
  for (var x = 0; x < str.length; x++) {
    var char = str[x].toLowerCase();
    if (
      char == "a" ||
      char == "e" ||
      char == "i" ||
      char == "o" ||
      char == "u"
    ) {
      strArr[x] = "";
    }
  }
  return strArr.join("");
}
let res2 =
  removevowel(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis facere, ad
  incidunt eos iusto facilis soluta hic voluptatem quidem quibusdam culpa
  officia. Tenetur, repellat illum aspernatur quos nulla molestias
  reiciendis, explicabo quas, quia voluptas repudiandae rerum non sed
  assumenda dolorem! Sint voluptatem illum porro modi fugiat beatae possimus
  quia nulla in fugit labore iste perspiciatis commodi, id quos ducimus
  doloribus numquam cum reiciendis vel nesciunt impedit repudiandae, ex
  illo? Dicta ullam assumenda omnis quia molestiae, repellat dolorem amet.
  Sint, vero?`);
console.log(res2);

//   6. Write a program to check whether the string is alphanumeric or not , eg:batman@45 contains digit 45
function isAlphaNumeric(str) {
  var code, i, len;

  for (i = 0, len = str.length; i < len; i++) {
    code = str.charCodeAt(i);
    if (
      !(code > 47 && code < 58) &&
      !(code > 64 && code < 91) &&
      !(code > 96 && code < 123)
    ) {
      console.log(`is not alphanumeric`);
      return false;
    }
  }
  console.log(`is alphanumeric`);
  return true;
}
isAlphaNumeric("batman@45");

//   7.A program that reads three strings and prints the longest and smallest one
let str5="Hello";
let str6="Hello World";
let str7="We are Full-stack Developer";
if (str5.length>=str6.length && str5.length >=str7.length){
    console.log(str5)
}else if(str6.length>=str5.length && str6.length >=str7.length){
    console.log(str6)
}else{
    console.log(str7)
}
// 8.A program that counts number of vowels and consonants in a String?

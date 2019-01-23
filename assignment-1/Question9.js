/*
  Q9. Find the length of the string (entered by the user) without using the built-in function.

  Following is the example of output:

  Input string: javascript
  Output: Length of string: 10
*/

let string = "imfantastic";
let splitString = string.split("");
let alphaCount = 0;

splitString.forEach(function(){alphaCount++});
console.log("Total number of alphabet in word " + string + " is " + alphaCount);

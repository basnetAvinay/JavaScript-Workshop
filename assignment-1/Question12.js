/*
  Q12. check whether the number entered by the user is a happy number or not. 
  The user will enter 20 input number and program will check if it is a happy number or not.

  A happy number is starting with any positive integer, replace the number by the sum of the 
  squares of its digits in base-ten, and repeat the process until the number either equals 1 
  (where it will stay), or it loops endlessly in a cycle that does not include 1. 
  Those numbers for which this process ends in 1 are happy numbers, while those that do not end
  in 1 are unhappy numbers (or sad numbers)

  If a number is happy, then all members of its sequence are happy; if a number is unhappy, 
  all members of the sequence are unhappy.

  Input: n = 19
  Output: 19 is Happy Number,
  1^2 + 9^2 = 82
  8^2 + 2^2 = 68
  6^2 + 8^2 = 100
  1^2 + 0^2 + 0^2 = 1
  As we reached to 1, 19 is a Happy Number.
*/

let readline = require('readline-sync');

let numberEntered = readline.question("Please, enter a number: ");

if(isHappy(numberEntered)) {
  console.log("I'm happy number.");
}
else {
  console.log("I'm not happy number.");
}

function isHappy(n) {
  const u = n.toString().split('').reduce(((ac,cv) => ac + cv**2), 0);
  if (u === 1) return true;
  if (u === 4) return false;
  else return isHappy(u);
}

/*
  Here, n.toString().split('') converts a number into string and stores the each digit in 
  array with '' seperation.

  reduce() method reduces the array to a single value.
  Here, .reduce(((ac,cv) => ac + cv**2), 0) takes two argument.

  (ac,cv) => ac + cv**2) is first argument. 
  It is required and it must be function to be run for each element in the array.

    (ac,cv)
    ac is required for function and is total value.
    In other words ac is the initial value of the previously returned value of the function.
    
    cv is required and it is value of the current element.

    ac + cv**2 is the description what function does or what function returns.

  0 is the optional second argument to reduce() which is an initial value to be passed to function.
*/

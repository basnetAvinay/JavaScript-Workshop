/*
  Q13. check whether a number entered by the user is magic number or not. 
  The user will enter 1729 input number and program will calculate and check if it is magic number 
  or not and print on the console.

  What is the magic number?
  Input: 1729
  Sum of digits of the given number.(1 + 7 + 2 + 9 => 19)
  The reverse of 19 is 91
  The product of digit sum and the reverse of digit sum.(19 X 91 = 1729)
  If the product value and the given input are same,
  then the given number is a magic number.(19 X 91 <=> 1729)

  Output: So, 1729 is a magic number.
*/

let readline = require('readline-sync');

let originalNumber = readline.question("Please, enter a integer number: ");

if(isMagic(originalNumber)) {
  console.log(originalNumber + " is a magic number.");
}
else {
  console.log(originalNumber + " is not a magic number.");
}

const isMagic = (intNumber) => {
  if(findNumberSum(intNumber) * reverseInt(findNumberSum(intNumber)) == originalNumber) {
    return true;
  }
  else {
    return false;
  }
};

const findNumberSum = (intNumber) => {
  let sum = 0;
  let splitNumber = (intNumber.toString()).split("");
  
  for(let i=0; i<splitNumber.length; i++) {
    splitNumber[i] = Number(splitNumber[i]);
    sum = sum + splitNumber[i];
  }
  return sum;
};

const reverseInt = (intNumber) => parseInt(intNumber.toString().split('').reverse().join(''));


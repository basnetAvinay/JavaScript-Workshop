/*
  Q11. check whether the number entered by the user is a strong number or not.

  Strong Numbers are the numbers whose sum of factorial of digits is equal to the original number. 
  Given a number, check if it is a Strong Number or not.

  Input: 145
  Output: Yes
  Sum of digit factorials = 1! + 4! + 5!
                          = 1 + 24 + 120
                          = 145
*/

let readline = require('readline-sync');

let orgNumber = readline.question("Please, enter a integer number: ");

let sumOfDigit = 0;

if(isStrongNumber(orgNumber)) {
  console.log(orgNumber + " is a strong number.");
}
else {
  console.log(orgNumber + " is not a strong number.");
}

const isStrongNumber = (intNumber) => {
  if(digitFactorialSum(intNumber) == orgNumber) {
    return true;
  }
  else {
    return false;
  }
};

const digitFactorialSum = (number) => {
  let splitedNumbers = number.toString().split("");
  
  for(let i=0; i<splitedNumbers.length; i++) {
    splitedNumbers[i] = Number(splitedNumbers[i]);
    sumOfDigit += factorial(splitedNumbers[i]);
  }

  return sumOfDigit;
};

const factorial = (intNumber) => {
  if(intNumber == 1 || intNumber == 0) {
    return 1;
  }
  return intNumber * factorial(intNumber - 1);
};


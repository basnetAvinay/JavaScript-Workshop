/*
  Q10. check whether a number (entered by the user) is a perfect number or not.

  A perfect number, a positive integer that is equal to the sum of its proper divisors. 
  The smallest perfect number is 6, which is the sum of 1, 2, and 3.

  Input: 6
  Proper divisors of 6 are: 1, 2 and 3
  Sum of proper divisors = (1 + 2 + 3) which is equal to 6 (our input)
  Hence, 6 is perfect number
*/

let readline = require('readline-sync');

let orgNumber = readline.question("Please, enter a number: ");
let properDivisors = new Array();
orgNumber = Number(orgNumber);

const isPerfectNumber = (number) => {
  for(let i=1; i<number; i++) {
    if(number % i == 0) {
      properDivisors.push(i);
    }
  }

  const divisiorsSum = properDivisors.reduce((sum, i) => sum+i, 0);

  if(divisiorsSum === number) {
    return true;
  }
  else {
    return false;
  }  
};

if(isPerfectNumber(orgNumber)) {
  console.log(orgNumber + " is a perfect number.");
}
else {
  console.log(orgNumber + " is not a perfect number.");
}
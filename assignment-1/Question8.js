/*
  Q8. Determine whether a year is a leap year or not

  Steps:

  If the year is evenly divisible by 4, go to step 2. Otherwise, go to step 5.
  If the year is evenly divisible by 100, go to step 3. Otherwise, go to step 4.
  If the year is evenly divisible by 400, go to step 4. Otherwise, go to step 5.
  The year is a leap year (it has 366 days).
  The year is not a leap year (it has 365 days).
*/

let readline = require('readline-sync');

let year = readline.question("Please, enter a year: ");

const isLeapYear = (year) => {
  if(isEven(year % 4) && isEven(year % 100 && isEven(year % 400))) {
    return true;
  }
  else {
    return false;
  }
};

const isEven = (num) => {
  if(num % 2 == 0) {
    return true;
  }
  else {
    return false;
  }
};

if(isLeapYear(year)) {
  console.log("The " + year + " year is a leap year.");
}
else {
  console.log("The " + year + " year is not a leap year.");
}
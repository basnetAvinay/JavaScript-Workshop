/*
  Q7. The Pluralizer

  Write a function named pluralize that: takes 2 arguments, a noun and a number. 
  returns the number and pluralized form, like "5 cats" or "1 dog".

  For example:

  pluralize('cat', 1) // Outputs: 1 cat
  pluralize('cat', 2) // Outputs: 2 cats
*/

const pluralize = (noun, number) => {
  if(number > 1) {
    console.log(number + ' ' + noun.concat('s'));
  }
  else if(number == 1) {
    console.log(number + ' ' + noun);
  }
  else {
    console.log("Invalid number.");
  }
};

pluralize('dog', 5);
pluralize('girl', 1);
pluralize('girl', -3);
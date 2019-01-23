/*
  Q5. The MixUP

  Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:

  mixUp('mix', 'pod'); // Outputs: 'pox mid'
  mixUp('dog', 'dinner'); // Outputs:  'dig donner'
*/

function mixUp (firstStr, secondStr) {
  let result1 = secondStr.slice(0,2) + firstStr.slice(-1);
  let result2 = firstStr.slice(0, 2) + secondStr.slice(2);
  
  console.log(result1 + ' ' + result2);
}

mixUp('mix', 'pod');
mixUp('dog', 'dinner');
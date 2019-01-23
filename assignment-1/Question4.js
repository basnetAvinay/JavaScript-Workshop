/*
  Q4. The Calculator

  Write a function that will take one argument (a number) and perform the following operations:
  Take half of the number and store the result.
  Square the result of #1 and store that result.
  Calculate the area of a circle with the result of #2 as the radius.
*/

const calculator = (num) => {
  numHalf = num/2;
  numHalfSq = numHalf**2;
  area = Math.PI*numHalfSq**2;
  console.log(area);
};

calculator(4);

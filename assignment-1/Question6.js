/*
  Q6. Given the percentage of a student, find out the division of that student. Conditions:

  Distinction if 100 > percentage >= 80
  First Division if 80 > percentage >= 60
  Second Division if 60 > percentage >= 40
  Third Division if 40 > percentage >= 32
  Else fail
*/

const percentage = (percent) => {
  if(percent <= 100 && percent >= 80) {
    console.log("Distinction.");
  }
  else if(percent < 80 && percent >= 60) {
    console.log("First Division.");
  }
  else if(percent < 60 && percent >= 40) {
    console.log("Second Division.");
  }
  else if(percent > 40 && percent >= 32) {
    console.log("Third Division.");
  }
  else {
    console.log("Fail.");
  }
};

percentage(80);
percentage(67);
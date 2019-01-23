# JavaScript-Workshop

Install readline-sync using following command in project directory to get input from console

  npm install readline-sync
  
Example,
let readline = require('readline-sync');

let name = readline.question("What is your name?");

console.log("Hi " + name + ", nice to meet you.");

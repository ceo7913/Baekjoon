let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let a = parseInt(input[0]);
let b = parseInt(input[1]);

let digit1 = b % 10;     
let digit10 = Math.floor((b % 100) / 10); 
let digit100 = Math.floor(b / 100);        

console.log(a * digit1);
console.log(a * digit10);
console.log(a * digit100);
console.log(a * b);
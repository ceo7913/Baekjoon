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

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let a = input[0];
// let b = input[1];

// digit1 = b[2];
// digit10 = b[1];
// digit100 = b[0];

// console.log(Number(a) * Number(digit1));
// console.log(Number(a) * Number(digit10));
// console.log(Number(a) * Number(digit100));
// console.log(Number(a) * Number(b));

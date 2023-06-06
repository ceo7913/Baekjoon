let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let a = Number(input[0]);
let n = 0;

for (let i = 1; i <= a; i++) {
  n += i;
}

console.log(n);
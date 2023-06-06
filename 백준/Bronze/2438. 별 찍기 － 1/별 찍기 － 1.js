let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let N = Number(input[0]);
let A = ""

for (let i = 1; i <= N; i++) {
  for(let j = 1; j <= i; j++){
    A += "*";
  }
  A += "\n";
}

console.log(A);
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let Test = Number(input[0]);
let answer = '';

for (let t = 1; t <= Test; t++) {
  let data = input[t].split(' ');
  let [A, B] = data.map(Number);
  answer += A + B + '\n';
}

console.log(answer);
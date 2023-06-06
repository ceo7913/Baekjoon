const fs = require('fs');
const input = fs.readFileSync('/dev/stdin','utf8').toString().split('\n');

const [A, B] = input[0].split(' ').map(Number);
const C = Number(input[1]);

let totalM = (A * 60 + B + C) % 1440;
const H = Math.floor(totalM / 60);
const M = totalM % 60;

console.log(`${H} ${M}`);

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split("\n");

// let [A,B] = input[0].split(" ").map(Number);
// let C = Number(input[1]);

// let totalM = (A * 60 + B + C) % 1440;
// let H = parseInt(totalM / 60);
// let M = totalM % 60;

// console.log(H + " " + M)

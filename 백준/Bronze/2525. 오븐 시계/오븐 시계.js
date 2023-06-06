const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const [A, B] = input[0].split(' ').map(Number);
const C = Number(input[1]);

let totalM = (A * 60 + B + C) % 1440;
const H = Math.floor(totalM / 60);
const M = totalM % 60;

console.log(`${H} ${M}`);
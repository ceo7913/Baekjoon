let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
const height = Number(input[0].split(" ")[0]);
const width = Number(input[0].split(" ")[1]);
const chessboard = [];

for (let i = 1; i <= height; i++) {
  input[i] = input[i].slice(0, width);
  chessboard.push(input[i].split(""));
}

const countPaint = (i, j, startColor) => {
  let count = 0;
  for (let w = i; w < i + 8; w++) {
    for (let h = j; h < j + 8; h++) {
      const isSameColor = (w + h) % 2 === startColor;
      count += chessboard[h][w] !== (isSameColor ? "W" : "B");
    }
  }
  return count;
};

let answer = Infinity;

for (let i = 0; i + 7 < width; i++) {
  for (let j = 0; j + 7 < height; j++) {
    answer = Math.min(answer, countPaint(i, j, 0), countPaint(i, j, 1));
  }
}

console.log(answer);
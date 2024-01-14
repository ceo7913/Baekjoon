let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
const N = Number(input[0]);
input.shift();
input = input.map((element) => element.trim().split(" "));
const sum = Array.from(new Array(N), () => new Array());
sum[0].push(Number(input[0][0]));
if (N > 1) {
  for (let r = 1; r < N; r++) {
    for (let c = 0; c < input[r].length; c++) {
      if (c === 0) {
        sum[r].push(Number(sum[r - 1][c]) + Number(input[r][c]));
      } else if (c === r) {
        sum[r].push(Number(sum[r - 1][c - 1]) + Number(input[r][c]));
      } else {
        sum[r].push(
          Math.max(Number(sum[r - 1][c - 1]), Number(sum[r - 1][c])) +
            Number(input[r][c])
        );
      }
    }
  }
}
console.log(Math.max(...sum[N - 1]));
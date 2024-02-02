let fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().split("\n");
const N = Number(input[0]);
input.shift();
input = input.map((value) =>
  value.split(" ").map((element) => Number(element))
);
for (let i = 1; i < N; i++) {
  input[i][0] = Math.min(input[i - 1][1], input[i - 1][2]) + input[i][0];
  input[i][1] = Math.min(input[i - 1][0], input[i - 1][2]) + input[i][1];
  input[i][2] = Math.min(input[i - 1][0], input[i - 1][1]) + input[i][2];
}
console.log(Math.min(...input[N - 1])); // 자꾸 이러면 나 정신 나가
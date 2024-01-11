function solution(N) {
  const memo = new Array();
  memo[1] = 1;
  memo[2] = 2;
  for (let i = 3; i <= N; i++) {
    memo[i] = (memo[i - 2] + memo[i - 1]) % 15746;
  }
  console.log(memo[N]);
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input;
rl.on("line", function (line) {
  input = line;
  solution(Number(input));
  rl.close();
}).on("close", function () {
  process.exit();
});
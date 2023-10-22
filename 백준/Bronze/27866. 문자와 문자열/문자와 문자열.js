let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";

let input = fs.readFileSync(filePath).toString().split("\n");
let str = input[0].split("");

console.log(str[parseInt(input[1]) - 1]);
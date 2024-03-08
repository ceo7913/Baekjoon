let fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().split("\n");
let cost = BigInt(0);
const N = Number(input[0]); 
const distance = input[1]
  .trim()
  .split(" ")
  .map((element) => BigInt(element)); 

let city = input[2]
  .trim()
  .split(" ")
  .map((element) => BigInt(element));

let lowestPrice = city[0]; 
for (let i = 0; i < city.length - 1; i++) {
  if (lowestPrice > city[i]) {
    lowestPrice = city[i];
  }
  cost += lowestPrice * distance[i];
}
console.log(cost.toString());
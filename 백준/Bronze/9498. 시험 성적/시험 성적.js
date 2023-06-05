let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(" ");

data =Number(input[0]);

function checkRecord(a) {
  if (90 <= a && a <= 100) console.log('A')
  else if (80 <= a && a <= 89) console.log('B')
  else if (70 <= a && a <= 79) console.log('C')
  else if (60 <= a && a <= 69) console.log('D')
  else console.log('F')

}

checkRecord(data);

/*
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(" ");


let MyScroe = Number(input[0]);

let checkRecord = (i) => {
  let score = ""
  if (i >= 90 && i <= 100) {
    score = "A"
  } else if (i >= 80 && i <= 89) {
    score = "B"
  } else if (i >= 70 && i <= 79) {
    score = "C"
  } else if (i >= 60 && i <= 69) {
    score = "D"
  } else {
    score = "F"
  }
  return score;
}

console.log(checkRecord(MyScroe))
*/

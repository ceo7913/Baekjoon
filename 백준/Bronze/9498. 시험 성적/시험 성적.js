let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(" ");

data =Number(input[0]);

let checkRecord = (i) => {
  if (90 <= i && i <= 100) {
    console.log('A')
  } else if (80 <= i && i <= 89) {
    console.log('B')
  } else if (70 <= i && i <= 79) {
    console.log('C')
  } else if (60 <= i && i <= 69) {
    console.log('D')
  } else {
    console.log('F')
  }
}

checkRecord(data);
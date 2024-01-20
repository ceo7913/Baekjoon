let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let n = Number(input[0]);
let numbers = input[1].split(" ").map((element) => Number(element));
let primeNumbers = [];
let primeNumber;

for(let i = 0; i < n; i++){
    primeNumber = 3;
    while(true){
        if(numbers[i] === 1 || numbers[i] % 2 === 0){ 
            if(numbers[i] === 2){
                primeNumbers.push(numbers[i]);
                break;
            }
            break;
        }else{
               if(primeNumber*primeNumber <= numbers[i]){
                   if(numbers[i] % primeNumber === 0){
                        break;
                   }else{
                        primeNumber = primeNumber + 2;
                   }
               }else{
                    primeNumbers.push(numbers[i]);
                    break;
               }
        }
    }
}
console.log(primeNumbers.length);
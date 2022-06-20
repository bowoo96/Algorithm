const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let test = parseInt(input[0])

for (let i = 1; i <= test; i++) {
  let result = input[i].split(' ').map(Number);
  console.log(result[0] + result[1]);
};
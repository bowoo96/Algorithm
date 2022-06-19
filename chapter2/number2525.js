const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let H = parseInt(input[0].split(" ")[0]); //시간 > 분
let M = parseInt(input[0].split(" ")[1]); //분
let T = parseInt(input[1].split(" ")); //분

//H, M += T

let sum = H * 60 + M + T;
console.log(Math.floor(sum / 60) % 24 + ' ' + sum % 60);
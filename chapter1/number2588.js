const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let a = parseInt(input[0]);
let b = input[1].split('').map(Number);

console.log(`${(b[2] * a)}
${b[1] * a}
${b[0] * a}
${(b.join('')) * a}`);
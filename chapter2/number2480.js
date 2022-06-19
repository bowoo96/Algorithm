const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');

let d1 = parseInt(input[0]);
let d2 = parseInt(input[1]);
let d3 = parseInt(input[2]);

if (d1 === d2 && d2 === d3) {

  console.log(10000 + d1 * 1000);

} else if (d1 === d2 || d1 === d3) {

  console.log(1000 + d1 * 100);

} else if (d2 === d3) {

  console.log(1000 + d2 * 100);

} else if (d1 !== d2 && d1 !== d3 && d2 !== d3) {

  console.log(Math.max(d1, d2, d3) * 100);

};
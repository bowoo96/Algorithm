const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let test = parseInt(input[0]);
let result = "";

for (let i = 1; i <= test; i++) {
  let a = input[i].split(" ").map(Number);
  result += a[0] + a[1] + "\n";
}

console.log(result);

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");

let a = parseInt(input[0]);
let result = "";

for (let i = 1; i <= a; i++) {
  result += i + "\n";
}

console.log(result);

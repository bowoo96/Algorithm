const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");

let result = 0;

for (let i = 1; i <= parseInt(input[0]); i++) {
  result += i;
}

console.log(result);

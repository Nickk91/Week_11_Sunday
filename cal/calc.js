const [num1, operator, num2] = process.argv.slice(2);

console.log("num2", num2);
console.log("operator", operator);
console.log("num1", num1);
let result;

switch (operator) {
  case "+":
    result = parseInt(num1) + parseInt(num2);
    console.log("add", result);
    break;
  case "-":
    result = parseInt(num1) - parseInt(num2);
    console.log("subtract", result);
    break;
  case "/":
    result = parseInt(num1) / parseInt(num2);
    console.log("divide", result);
    break;
  case "*":
    result = parseInt(num1) * parseInt(num2);
    console.log("multiply", result);
    break;
}
console.log("result", result);

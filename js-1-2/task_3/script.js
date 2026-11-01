
const num1 = Number(prompt("Enter the first integer:"));
const num2 = Number(prompt("Enter the second integer:"));
const num3 = Number(prompt("Enter the third integer:"));

const sum = num1 + num2 + num3;
const product = num1 * num2 * num3;
const average = sum / 3;

document.getElementById("sum").textContent = `Sum: ${sum}`;
document.getElementById("product").textContent = `Product: ${product}`;
document.getElementById("average").textContent = `Average: ${average}`;

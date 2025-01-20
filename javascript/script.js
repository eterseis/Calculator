const operators = ["+", "-", "*", "/", "%", "+/-", "C", "="];

let aArray = [];
let arithmetic_operator = null;
let bArray = [];

const output = document.querySelector(".output");

const input = document.querySelector(".input");
input.addEventListener("click", function (e) {
  if (operators.indexOf(e.target.textContent) === -1) {
    if (arithmetic_operator === null) {
      aArray.push(e.target.textContent);
      output.textContent = aArray.join("");
    } else {
      bArray.push(e.target.textContent);
      output.textContent = bArray.join("");
    }
  } else if (operators.slice(0, 5).indexOf(e.target.textContent) != -1) {
    arithmetic_operator = e.target.textContent;
  }
  if (
    (e.target.textContent === "=" && arithmetic_operator != null) ||
    e.target.textContent == "%"
  ) {
    switch (arithmetic_operator) {
      case "+":
        output.textContent = add(aArray, bArray);
        break;
      case "-":
        output.textContent = subtraction(aArray, bArray);
        break;
      case "*":
        output.textContent = multiply(aArray, bArray);
        break;
      case "/":
        output.textContent = divide(aArray, bArray);
        break;
      case "%":
        output.textContent = percentage(aArray);
        break;
    }
    clear();
  }
});

function validate(arr) {
  return typeof Number(arr.join("")) === "number" ? true : false;
}
function add(arr, arr2) {
  if (!(validate(arr) && validate(arr2))) return "not a number";
  let a = Number(arr.join(""));
  let b = Number(arr2.join(""));
  return a + b;
}
function subtraction(arr, arr2) {
  if (!(validate(arr) && validate(arr2))) return "not a number";
  let a = Number(arr.join(""));
  let b = Number(arr2.join(""));
  return a - b;
}
function multiply(arr, arr2) {
  if (!(validate(arr) && validate(arr2))) return "not a number";
  let a = Number(arr.join(""));
  let b = Number(arr2.join(""));
  return a * b;
}
function divide(arr, arr2) {
  if (!(validate(arr) && validate(arr2))) return "not a number";
  let a = Number(arr.join(""));
  let b = Number(arr2.join(""));
  return a / b;
}
function percentage(arr) {
  if (!validate(arr)) return "not a number";
  let a = Number(arr.join(""));
  return (a * 100) / 100 / 100;
}
function clear() {
  aArray = [];
  bArray = [];
  arithmetic_operator = null;
}

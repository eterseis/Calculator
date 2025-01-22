let a = [];
let b = [];
let operator = null;

const output = document.querySelector(".output");

const input = document.querySelector(".input");
input.addEventListener("click", (e) => {
  if (!(e.target.classList[0] == "column")) return;
  if (e.target.id === "clearAll" && a.length > 0) {
    operator = clearAll(a, b, output);
  }
  if (e.target.id === "changeSign" && a.length > 0) {
    changeSign(a, b, operator, output);
  }

  if (e.target.classList.length > 1 && a.length > 0) {
    operator = e.target.textContent;
  }
  if (!isValid(e.target.id, a, b)) {
    getNumbers(e.target, output, operator, a, b);
  } else {
    a = String(calculate(a, b, getCallback(operator))).split("");
    b.length = 0;
    operator = null;
    output.textContent = a.join("");
  }
});

function getNumbers(target, output, operator, a = [], b = []) {
  //------------------Validate-----------------//
  if (!(Number("0" + target.textContent) >= 0)) return;
  if (target.textContent === "." && a.includes(".") && operator === null)
    return;
  if (target.textContent === "." && b.includes(".") && operator !== null)
    return;
  if (target.textContent === "0" && a[0] === "0" && a.indexOf(".") === -1)
    return;
  if (target.textContent === "0" && b[0] === "0" && b.indexOf(".") === -1)
    return;
  //------------------------------------------//

  if (operator === null) {
    if (target.textContent === "." && a.length === 0) {
      a.push("0");
      a.push(".");
    } else {
      a.push(target.textContent);
    }
    output.textContent = a.join("");
  } else {
    if (target.textContent === "." && b.length === 0) {
      b.push("0");
      b.push(".");
    } else {
      b.push(target.textContent);
    }
    output.textContent = b.join("");
  }
}

function calculate(a = [], b = [], callback) {
  let n1 = Number(a.join(""));
  let n2 = Number(b.join(""));
  if (typeof (n1 + n2) !== "number") return;
  return callback(n1, n2);
}

function getCallback(operator) {
  switch (operator) {
    case "+":
      return add;
    case "-":
      return subtract;
    case "*":
      return multiply;
    case "/":
      return divide;
    case "%":
      return percentage;
  }
}

function clearAll(a = [], b = [], output) {
  a.length = 0;
  b.length = 0;
  output.textContent = 0;
  return null;
}

function changeSign(a = [], b = [], operator, output) {
  if (a[0] === "0" || b[0] === "0") return;
  if (operator === null) {
    if (a[0] === "-") {
      a.shift();
      output.textContent = a.join("");
    } else {
      a.unshift("-");
      output.textContent = a.join("");
    }
  } else {
    if (b[0] === "-") {
      b.shift();
      output.textContent = b.join("");
    } else {
      b.unshift("-");
      output.textContent = b.join("");
    }
  }
}

function isValid(btn, a = [], b = []) {
  if (btn === "equals"){
    if (a.length > 0 && b.length > 0){
      return true;
    }
  }

  if (btn === "percentage"){
    if (a.length > 0) return true;
  }
  return false;
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function percentage(a) {
  return a / 100;
}

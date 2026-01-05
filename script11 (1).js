function getValues() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  return { num1, num2 };
}

function add() {
  const { num1, num2 } = getValues();
  document.getElementById("result").innerText = "Result: " + (num1 + num2);
}

function subtract() {
  const { num1, num2 } = getValues();
  document.getElementById("result").innerText = "Result: " + (num1 - num2);
}

function multiply() {
  const { num1, num2 } = getValues();
  document.getElementById("result").innerText = "Result: " + (num1 * num2);
}

function divide() {
  const { num1, num2 } = getValues();
  if (num2 === 0) {
    document.getElementById("result").innerText = "Cannot divide by zero";
  } else {
    document.getElementById("result").innerText = "Result: " + (num1 / num2);
  }
}

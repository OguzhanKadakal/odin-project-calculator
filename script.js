const displayBottom = document.querySelector("#display-bottom");
const displayTop = document.querySelector("#display-top");
const numberButtons = document.querySelectorAll(".btn.number");
const operatorButtons = document.querySelectorAll(".btn.operator");
const clearButton = document.querySelector("#allClear");
const deleteButton = document.querySelector("#deleteArrow");
const equalsButton = document.querySelector("#equals");
const decimalButton = document.querySelector("#decimal");
const signButton = document.querySelector("#sign");

let displayValue = ""; // The value displayed on the calculator
let displayValueTop = ""; // The value displayed on the top of the calculator
let firstNumber = ""; // The first operand
let secondNumber = ""; // The second operand
let operator = ""; // The operator
let result = ""; // The result of the operation

// Function to operate the calculator

// Function to handle number button clicks
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (displayValue === "0") {
      displayValue = button.textContent;
    } else {
      displayValue += button.textContent;
    }
    updateDisplay();
  });
});
// Function to update the display
function updateDisplay() {
  displayBottom.value = displayValue;
}

// Function to update the display top
function updateDisplayTop() {
  displayTop.value = displayValueTop;
}

// Function to handle operator button clicks
operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (firstNumber === "") {
      firstNumber = displayValue;
      operator = button.textContent;
      displayValueTop = firstNumber + " " + operator;
      displayValue = "";
    } else {
      secondNumber = displayValue;
      displayValueTop = firstNumber + " " + operator + " " + secondNumber;
      operate();
      firstNumber = result;
      operator = button.textContent;
      displayValue = "";
    }
    updateDisplay();
    updateDisplayTop();
  });
});

// Function to handle the equals button click
equalsButton.addEventListener("click", () => {
  if (firstNumber !== "" && displayValue !== "") {
    secondNumber = displayValue;
    displayValueTop = firstNumber + " " + operator + " " + secondNumber;
    operate();
    firstNumber = "";
    secondNumber = "";
    operator = "";
    displayValue = result;
    updateDisplay();
    updateDisplayTop();
  }
});

updateDisplay();
// Function to clear the display
clearButton.addEventListener("click", () => {
    displayValue = "0";
    displayValueTop = "";
    firstNumber = "";
    secondNumber = "";
    operator = "";
    result = "";
    updateDisplay();
    updateDisplayTop();
});

// Function to delete the last character
deleteButton.addEventListener("click", () => {
  displayValue = displayValue.slice(0, -1);
  if (displayValue === "") {
    displayValue = "0";
  }
  updateDisplay();
});
// Function to handle the decimal button click
decimalButton.addEventListener("click", () => {
  if (!displayValue.includes(".")) {
    displayValue += ".";
  }
  updateDisplay();
});
// Function to handle the sign button click
signButton.addEventListener("click", () => {
  if (displayValue.charAt(0) === "-") {
    displayValue = displayValue.slice(1);
  } else {
    displayValue = "-" + displayValue;
  }
  updateDisplay();
});

// Function to perform the operation
function operate() {
  switch (operator) {
    case "+":
      result = add(parseFloat(firstNumber), parseFloat(secondNumber));
      break;
    case "-":
      result = subtract(parseFloat(firstNumber), parseFloat(secondNumber));
      break;
    case "*":
      result = multiply(parseFloat(firstNumber), parseFloat(secondNumber));
      break;
    case "/":
      if (secondNumber === "0") {
        result = "Error";
      } else {
        result = divide(parseFloat(firstNumber), parseFloat(secondNumber));
      }
      break;
  }
}
// Function to add two numbers
function add(a, b) {
  return a + b;
}
// Function to subtract two numbers
function subtract(a, b) {
  return a - b;
}
// Function to multiply two numbers
function multiply(a, b) {
  return a * b;
}
// Function to divide two numbers
function divide(a, b) {
  return a / b;
}



// Function to handle keyboard inputs
document.addEventListener("keydown", (e) => {
  if (e.key >= 0 && e.key <= 9) {
    if (displayValue === "0") {
      displayValue = e.key;
    } else {
      displayValue += e.key;
    }
    updateDisplay();
  } else if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/") {
    if (firstNumber === "") {
      firstNumber = displayValue;
      operator = e.key;
      displayValueTop = firstNumber + " " + operator;
      displayValue = "";
    } else {
      secondNumber = displayValue;
      displayValueTop = firstNumber + " " + operator + " " + secondNumber;
      operate();
      firstNumber = result;
      operator = e.key;
      displayValue = "";
    }
    updateDisplay();
    updateDisplayTop();
  } else if (e.key === "=" || e.key === "Enter") {
    if (firstNumber !== "" && displayValue !== "") {
      secondNumber = displayValue;
      displayValueTop = firstNumber + " " + operator + " " + secondNumber;
      operate();
      firstNumber = "";
      secondNumber = "";
      operator = "";
      displayValue = result;
      updateDisplay();
      updateDisplayTop();
    }
  } else if (e.key === "Backspace") {
    displayValue = displayValue.slice(0, -1);
    if (displayValue === "") {
      displayValue = "0";
    }
    updateDisplay();
  } else if (e.key === ".") {
    if (!displayValue.includes(".")) {
      displayValue += ".";
    }
    updateDisplay();
  } else if (e.key === "Delete") {
    displayValue = "0";
    displayValueTop = "";
    firstNumber = "";
    secondNumber = "";
    operator = "";
    result = "";
    updateDisplay();
  }
});

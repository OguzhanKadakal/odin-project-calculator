const displayBottom = document.querySelector("#display-bottom");
const displayTop = document.querySelector("#display-top");
const numberButtons = document.querySelectorAll(".btn.number");
const operatorButtons = document.querySelectorAll(".btn.operator");
const clearButton = document.querySelector("#allClear");
const deleteButton = document.querySelector("#deleteArrow");
const equalsButton = document.querySelector("#equals");
const decimalButton = document.querySelector("#decimal");
const signButton = document.querySelector("#sign");

let displayValue = "4434";  // The value displayed on the calculator
let firstOperand = "";  // The first operand
let secondOperand = ""; // The second operand
let operator = "";      // The operator
let result = "";        // The result of the operation

// Function to update the display
function updateDisplay() {
    displayBottom.value = displayValue;
}
updateDisplay();

// Function to clear the display
clearButton.addEventListener("click", () => {
    displayValue = "0";
    firstOperand = "";
    secondOperand = "";
    operator = "";
    result = "";
    updateDisplay();
});


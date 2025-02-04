const displayBottom = document.querySelector("#display-bottom");
const displayTop = document.querySelector("#display-top");
const numberButtons = document.querySelectorAll(".btn.number");
const operatorButtons = document.querySelectorAll(".btn.operator");
const clearButton = document.querySelector("#allClear");
const deleteButton = document.querySelector("#deleteArrow");
const equalsButton = document.querySelector("#equals");
const decimalButton = document.querySelector("#decimal");
const signButton = document.querySelector("#sign");

let displayValue = "";  // The value displayed on the calculator
let displayValueTop = "";  // The value displayed on the top of the calculator
let firstNumber = "";  // The first operand
let secondNumber = ""; // The second operand
let operator = "";      // The operator
let result = "";        // The result of the operation

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
updateDisplay();
// Function to clear the display
clearButton.addEventListener("click", () => {
    displayValue = "0";
    displayValueTop = ""
    firstNumber = "";
    secondNumber = "";
    operator = "";
    result = "";
    updateDisplay();
});


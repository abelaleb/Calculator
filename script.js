const displayElement = document.querySelector(".input");
let displayedContent = "";
displayElement.textContent = displayedContent;
let CalculatorState = "waitingForNum1"; // Initial state
let currentOperator = ""; // Define currentOperator outside event listeners
let numbersArray1 = [];
let numbersArray2 = [];
let lastIndex1 = 0;
let lastIndex2 = 0;
let result = "";

const numberButtons = document.querySelectorAll(".number");
numberButtons.forEach((button) => {
  button.addEventListener("click", function () {
    if (CalculatorState === "waitingForNum1") {
      displayedContent += button.getAttribute("value"); // Add clicked number to the display
      updateDisplay(displayedContent);
      numbersArray1.push(displayedContent);
    } else if (CalculatorState === "waitingForNum2") {
      displayedContent += button.getAttribute("value");
      updateDisplay(displayedContent);
      numbersArray2.push(displayedContent);
    }
  });
});

// Operator buttons event listeners
const operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const operator = button.getAttribute("value");
    if (CalculatorState === "waitingForNum1") {
      currentOperator = operator;
      updateDisplay(operator);
      displayedContent = "";
      CalculatorState = "waitingForNum2";
    } else if (CalculatorState === "waitingForNum2") {
      let lastIndex1 = numbersArray1.length - 1;
      let lastIndex2 = numbersArray2.length - 1;
      result = operate(
        parseFloat(numbersArray1[lastIndex1]),
        parseFloat(numbersArray2[lastIndex2]),
        currentOperator
      );
      displayedContent = result; // Reset calculator state
      updateDisplay(result);
      numbersArray1.push(result);
      CalculatorState = "waitingForNum2";
      displayedContent = "";
      currentOperator = operator;
    }
  });
});
const equalsButton = document.querySelector(".equal");
equalsButton.addEventListener("click", () => {
  if(CalculatorState ===""){
    updateDisplay(0)
  }
  else if (CalculatorState === "waitingForNum1") {
    let lastIndex1 = numbersArray1.length - 1;
    let lastIndex2 = numbersArray2.length -1;
    result = operate(
      parseFloat(numbersArray1[lastIndex1]),
      parseFloat(numbersArray2[lastIndex2]),
      currentOperator
    );
    displayedContent = result; // Reset calculator state
    updateDisplay(result);
    numbersArray1.push(result)
    CalculatorState = "waitingForNum1";
    displayedContent =""
  } else if (CalculatorState === "waitingForNum2") {
    let lastIndex1 = numbersArray1.length - 1;
    let lastIndex2 = numbersArray2.length - 1;
    result = operate(
      parseFloat(numbersArray1[lastIndex1]),
      parseFloat(numbersArray2[lastIndex2]),
      currentOperator
    );
    displayedContent = result; // Reset calculator state
    updateDisplay(result);
    numbersArray1.push(result);
    CalculatorState = "waitingForNum1";
    displayedContent = "";
    console.log(
      "currentop :",
      currentOperator,
      "numbersArray1 :",
      numbersArray1,
      "numbersArray2 :",
      numbersArray2,
      lastIndex1,
      lastIndex2
    );
  }
});

// Function to update display
function updateDisplay(content) {
  displayedContent = content;
  displayElement.textContent = displayedContent;
}

function operate(num1, num2, operator) {
  if (operator === "+") {
    return sumNum(num1, num2);
  } else if (operator === "-") {
    return subNum(num1, num2);
  } else if (operator === "*") {
    return multiplyNum(num1, num2);
  } else if (operator === "/") {
    return divideNum(num1, num2);
  }
}
const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", () => {
  displayedContent = "";
  CalculatorState = "waitingForNum1";
  currentOperator = "";
  (numbersArray1 = []), (numbersArray2 = []);
  updateDisplay(displayedContent);
});

const pointButton = document.querySelector(".point");
pointButton.addEventListener("click", () => {
  displayedContent += ".";
  updateDisplay(displayedContent);
});

const plusMinusButton = document.querySelector(".plusMinus");
plusMinusButton.addEventListener("click", () => {
  displayedContent = plusMinusNum(parseFloat(displayedContent)); // Toggle plus/minus
  updateDisplay(displayedContent);
});

const percentageButton = document.querySelector(".percentage");
percentageButton.addEventListener("click", () => {
  displayedContent = percentageButtonNum(parseFloat(displayedContent)); // Calculate percentage
  updateDisplay(displayedContent);
});

function sumNum(num1, num2) {
  return num1 + num2;
}

function subNum(num1, num2) {
  return num1 - num2;
}

function multiplyNum(num1, num2) {
  return num1 * num2;
}

function divideNum(num1, num2) {
  if (num2 !== 0) {
    return num1 / num2;
  } else {
    return "Error: Division by zero";
  }
}

function plusMinusNum(number) {
  return -number;
}

function percentageButtonNum(number) {
  return `${number / 100}%`;
}

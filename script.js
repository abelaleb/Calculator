const displayInput = document.querySelector(".input");
const clear = document.querySelector(".clear");
const plusMinus = document.querySelector(".plusMinus");
const percentage = document.querySelector(".percentage");
const numbers = document.querySelectorAll(".number");
const point = document.querySelector(".point");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector(".equal");
//const seven = numbers.getAttribute("value");
//console.log(seven);
function sumNum(...numbers) {
  return numbers.reduce((total, num) => total + parseInt(num), 0);
}
function subNum(...numbers) {
  return numbers.reduce((total, num) => -total - parseInt(num), 0);
}
function multiplyNum(...numbers) {
  return numbers.reduce((total, num) => total * parseInt(num), 1);
}
function divideNum(...numbers) {
  return numbers.reduce((total, num) => total / parseInt(num));
}
function plusMinusNum(number) {
  if (number >= 0) {
    return -Math.abs(number);
  } else {
    return Math.abs(number);
  }
}
function percentageNum(number) {
  return number / 100;
}
let first = "10";
let second = "9";
let operator = "-";
let current = "";

function operate() {
  if ((operator === "+")) {
    return sumNum(first,second);
  } else if ((operator === "-")) {
    return subNum(first,second);
  } else if ((operator === "*")) {
    return multiplyNum(first, second);
  } else if ((operator === "/")) {
    return divideNum(first, second);
  }
}
console.log(operate());

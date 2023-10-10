// Butun buttun'larimiz aliriq
const buttons = document.querySelectorAll(".item");
// Screen elementimiz aliriq
const screen = document.querySelector(".screen");

let firstOperand = null;
let operator = null;
let currentOperand = "";

//butun buttonlara click event listener;imizi tedbiq edirik
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const target = event.target;
    const value = target.innerText;

    if (target.id === "clear") {
      firstOperand = null;
      operator = null;
      currentOperand = "";
      screen.innerText = "0";
    } else if (target.id === "plus-minus") {
      screen.innerText = -1 * screen.innerText;
    } else if (target.id === "percentage") {
      screen.innerText = parseFloat(screen.innerText) / 100;
    } else if (
      target.id === "divide" ||
      target.id === "multiply" ||
      target.id === "minus" ||
      target.id === "plus"
    ) {
      operator = value;
      firstOperand = parseFloat(screen.innerText);
      currentOperand = "";
    } else if (target.id === "equals") {
      if (operator) {
        const secondOperand = parseFloat(screen.innerText);
        console.log(firstOperand, secondOperand, operator);
        if (operator === "+") {
          firstOperand = firstOperand + secondOperand;

        } else if (operator === "−") {
          firstOperand = firstOperand - secondOperand;
        } else if (operator === "\u00D7") {
          //multiplication sign
          firstOperand = firstOperand * secondOperand;
        } else if (operator === "\u00F7") {
          //division sign
          firstOperand = firstOperand / secondOperand;
        }
        // firstOperand = firstOperand.toFixed(10);

        operator = null;
        currentOperand = firstOperand.toString();
        screen.innerText = firstOperand;
      }
    } else {
      if (value === "." && currentOperand.includes(".")) {
        return;
      }
      currentOperand += value;
      screen.innerText = currentOperand;
    }

    console.log(operator);
  });
});

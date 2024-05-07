const keys = document.querySelectorAll("button");
const display = document.querySelector(".calculator__display");
let n1, n2, operator, previousKey;

function handleClick(clickEvent) {
  const button = clickEvent.target;
  const action = button.dataset.action;

  if (action) {
    if (["add", "subtract", "multiply", "divide"].includes(action)) {
      n1 = Number(display.textContent);
      operator = action;
      previousKey = action;
    } else if (action === "decimal") {
      display.textContent += ".";
    } else if (action === "calculate") {
      n2 = Number(display.textContent);
      let result = calculate(n1, operator, n2);
      display.textContent = result;
    } else if (action === "clear") {
      n1, n2, operator, (previousKey = "");
      display.textContent = "";
    }
  } else {
    const enteredNumber = button.dataset.index;
    if (previousKey) {
      display.textContent = "";
    }
    display.textContent += enteredNumber;
  }
}

function calculate(n1, operator, n2) {
  let result = "";

  if (operator === "add") {
    result = n1 + n2;
  } else if (operator === "subtract") {
    result = n1 - n2;
  } else if (operator === "multiply") {
    result = n1 * n2;
  } else if (operator === "divide") {
    result = n1 / n2;
  }

  return result;
}

keys.forEach((key) => key.addEventListener("click", handleClick));

let display = document.getElementById("display");
let currentInput = "";
let operator = "";
let firstValue = "";

document.querySelectorAll(".buttons button").forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;
    if (!isNaN(value)) {
      currentInput += value;
      display.textContent = currentInput;
    } else if (value === "+" || value === "-") {
      operator = value;
      firstValue = currentInput;
      currentInput = "";
    } else if (value === "=") {
      if (operator && firstValue && currentInput) {
        const result = operator === "+" 
            ? parseFloat(firstValue) + parseFloat(currentInput) 
            : parseFloat(firstValue) - parseFloat(currentInput);
        display.textContent = result;
        currentInput = result.toString();
        operator = "";
        firstValue = "";
      }
    }
  });
});

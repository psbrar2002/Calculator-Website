let display = document.getElementById('display');
let currentInput = '';
let operator = '';

function appendToDisplay(value) {
  currentInput += value;
  display.value = currentInput;
}

function setOperator(op) {
  operator = op;
  currentInput += ' ' + op + ' ';
  display.value = currentInput;
}

function clearDisplay() {
  currentInput = '';
  operator = '';
  display.value = '';
}

function calculate() {
  const expression = currentInput.split(' ');
  const num1 = parseFloat(expression[0]);
  const num2 = parseFloat(expression[2]);
  switch (expression[1]) {
    case '+':
      display.value = num1 + num2;
      break;
    case '-':
      display.value = num1 - num2;
      break;
    case '*':
      display.value = num1 * num2;
      break;
    case '/':
      display.value = num1 / num2;
      break;
    default:
      display.value = 'Error';
  }
  currentInput = display.value;
  operator = '';
}

let display = document.getElementById('display');
    let currentInput = '';

    function appendToDisplay(value) {
      currentInput += value;
      display.value = currentInput;
    }

    function setOperator(op) {
      currentInput += ' ' + op + ' ';
      display.value = currentInput;
    }

    function clearDisplay() {
      currentInput = '';
      display.value = '';
    }

    function calculate() {
      const expression = currentInput.split(' ');
      let result = parseFloat(expression[0]);

      for (let i = 1; i < expression.length; i += 2) {
        const operator = expression[i];
        const operand = parseFloat(expression[i + 1]);

        switch (operator) {
          case '+':
            result += operand;
            break;
          case '-':
            result -= operand;
            break;
          case '*':
            result *= operand;
            break;
          case '/':
            result /= operand;
            break;
          default:
            display.value = 'Error';
            return;
        }
      }

      display.value = result;
      currentInput = result.toString();
    }
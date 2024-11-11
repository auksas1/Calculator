let currentInput = '';
let operator = '';
let previousValue = null;

function appendNumber(number) {
  currentInput += number;
  updateScreen();
}

function updateScreen() {
  document.getElementById('screen').value = currentInput;
}

function setOperator(op) {
  if (currentInput === '' && previousValue === null) return;
  
  if (operator && currentInput !== '') {
    
    calculateResult();
  }

  operator = op;
  previousValue = parseFloat(currentInput);
  currentInput = '';
}

function calculateResult() {
  if (operator === 'exponent') {
    calculatePowerResult();
  } else if (operator && previousValue !== null && currentInput !== '') {
    const currentValue = parseFloat(currentInput);
    let result;

    switch (operator) {
      case '+':
        result = previousValue + currentValue;
        break;
      case '-':
        result = previousValue - currentValue;
        break;
      case '*':
        result = previousValue * currentValue;
        break;
      case '/':
        result = currentValue === 0 ? 'Infinity' : previousValue / currentValue;
        break;
    }

    operator = '';
    previousValue = null;
    currentInput = result.toString();
    updateScreen();
  }
}

function clearScreen() {
  currentInput = '';
  operator = '';
  previousValue = null;
  updateScreen();
}

function calculateSquareRoot() {
  if (currentInput !== '') {
    const result = Math.sqrt(parseFloat(currentInput));
    currentInput = result.toString();
    updateScreen();
  }
}

function calculateSquare() {
  if (currentInput !== '') {
    const result = Math.pow(parseFloat(currentInput), 2);
    currentInput = result.toString();
    updateScreen();
  }
}

function calculateExponent() {
  if (currentInput !== '') {
    previousValue = parseFloat(currentInput);
    currentInput = '';
    operator = 'exponent';
  }
}

function calculatePowerResult() {
  if (operator === 'exponent' && currentInput !== '') {
    const result = Math.pow(previousValue, parseFloat(currentInput));
    currentInput = result.toString();
    operator = '';
    previousValue = null;
    updateScreen();
  }
}

function calculateTenthPower() {
  if (currentInput !== '') {
    const result = Math.pow(parseFloat(currentInput), 10);
    currentInput = result.toString();
    updateScreen();
  }
}

function calculateFactorial() {
  if (currentInput !== '') {
    const number = parseInt(currentInput);

    if (number < 0) {
      currentInput = 'NaN';
    } else {
      let result = 1;
      for (let i = 1; i <= number; i++) {
        result *= i;
      }
      currentInput = result.toString();
    }

    updateScreen();
  }
}

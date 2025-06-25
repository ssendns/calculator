const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const multiply = function(a, b) {
  return a * b;
};

const divide = function(a, b) {
    return a / b;
};

const operate = function(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            if (b === 0) {
                return "Cannot divide by zero";
            }
            return divide(a, b);
        default:
            return "error";
    }
};

const display = document.querySelector('#display');
const buttons = document.querySelectorAll('.btn');

let input = '';
let operator = null;
let a = null;

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (!isNaN(value)) {
            input += value;
            display.textContent = input;
        } else if (value === 'C') {
            input = '';
            operator = null;
            a = null;
            display.textContent = '0';
        } else if (value === '=') {
            if (a !== null && operator && input !== '') {
                const b = parseFloat(input);
                const result = operate(operator, a, b);
                display.textContent = result;
                input = '' + result;
                a = null;
                operator = null;
            }
        } else {
            a = parseFloat(input);
            operator = value;
            input = '';
            display.textContent = operator;
        }
    });
});
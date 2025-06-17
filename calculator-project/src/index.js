const add = require('./operations/add');
const subtract = require('./operations/subtract');
const multiply = require('./operations/multiply');
const divide = require('./operations/divide');

function calculator() {
    const a = parseFloat(prompt("Enter first number:"));
    const b = parseFloat(prompt("Enter second number:"));
    const operation = prompt("Enter operation (add, subtract, multiply, divide):");

    let result;

    switch (operation) {
        case 'add':
            result = add(a, b);
            break;
        case 'subtract':
            result = subtract(a, b);
            break;
        case 'multiply':
            result = multiply(a, b);
            break;
        case 'divide':
            result = divide(a, b);
            break;
        default:
            result = "Invalid operation";
    }

    console.log(`Result: ${result}`);
}

calculator();
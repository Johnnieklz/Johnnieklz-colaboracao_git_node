# Calculator Project

This is a simple calculator application built with JavaScript. It supports basic arithmetic operations: addition, subtraction, multiplication, and division.

## Project Structure

```
calculator-project
├── src
│   ├── index.js          # Entry point of the application
│   └── operations        # Contains operation modules
│       ├── add.js       # Addition operation
│       ├── subtract.js  # Subtraction operation
│       ├── multiply.js   # Multiplication operation
│       └── divide.js    # Division operation
├── package.json          # NPM configuration file
└── README.md             # Project documentation
```

## Installation

To get started, clone the repository and navigate to the project directory:

```bash
git clone <repository-url>
cd calculator-project
```

Then, install the necessary dependencies:

```bash
npm install
```

## Usage

To use the calculator, you can run the `index.js` file. You can import the operation functions from the `operations` directory to perform calculations.

### Example

```javascript
import { add } from './operations/add';
import { subtract } from './operations/subtract';
import { multiply } from './operations/multiply';
import { divide } from './operations/divide';

console.log(add(5, 3));        // Outputs: 8
console.log(subtract(5, 3));   // Outputs: 2
console.log(multiply(5, 3));    // Outputs: 15
console.log(divide(5, 0));      // Outputs: Error: Division by zero
```

## License

This project is licensed under the MIT License.
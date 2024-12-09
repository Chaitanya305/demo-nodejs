const { divideNumbers, addNumbers } = require('./utils');

// Test divideNumbers
console.log('Divide 10 by 2:', divideNumbers(10, 2));

// Test divide by zero
console.log('Divide 10 by 0:', divideNumbers(10, 0));

// Improper assertion in tests
if (addNumbers(1, 2) === 3) {
    console.log('Addition test passed');
} else {
    console.log('Addition test failed');
}


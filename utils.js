// Unused variable (SonarQube will flag this)
const unusedVar = "I am not used anywhere";

// Function with insufficient logging
function divideNumbers(a, b) {
    if (b === 0) {
        // Error condition with no proper error handling
        console.log('Division by zero attempted');
        return null;
    }
    return a / b;
}

// Function with duplicate code (SonarQube will flag this)
function addNumbers(a, b) {
    return a + b;
}

function addMoreNumbers(x, y) {
    return x + y; // Duplicate of addNumbers
}

module.exports = { divideNumbers, addNumbers, addMoreNumbers };


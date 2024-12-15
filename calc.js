 
let previousInput = '';
let operator = '';
let currentInput = '';

function appendNumber(number) {
    // append clicked number into previousInput
    // currentInput is a string
    // += appends clicked digits to this string
    // user may enter 1 or more digits eg) '342'
    currentInput += number;

    // the inputted number must appear on the calculator's display
    updateDisplay();
}
 

function setOperator(op) {
    // if no number entered after operator, simply return (do nothing)
    // currentInput is 2nd value
    if (currentInput === '') {
        return;
    }
    // if the currentInput value (aka 1st value) is NOT blank, we can safely call calculate()
    if (previousInput != '') {
        calculate();
    }

    /*
    eg) 7 + 3 
    previousInput = 7
    op = '+'
    currentInput = 3
    */

    // the clicked operator symbol is stored in operator variable
    // currentInput value stored in previousInput
    // then, currentInput is cleared to make room for the other number
    operator = op;
    previousInput = currentInput;
    currentInput = '';

}


function calculate() {
    
    let result = '';

    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(curr)) {
        return;
    }

    switch (operator) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            result = prev / curr;
            break;
        default:
            return; // If no operator is set, exit function
    }

    currentInput = result.toString();
    operator = '';
    previousInput = '';
    updateDisplay();

}

function updateDisplay() {
    // store previousInput value into display/input bar
    document.getElementById('display').value = currentInput;
}

function clearDisplay() {
    // set all values to blank (aka reset)
    // and then call updateDisplay() to actually clear display
    previousInput = '';
    operator = '';
    currentInput = '';
    updateDisplay();
}


/* PROCESS:
User enters currentInput (n digits) for first operand.
appendNumber() takes each clicked digit, and stores it in currentInput variable.
At the same time, updateDisplay() updates input-field (aka calculator display bar) with currentInput.

User clicks operator symbol, which gets stored in operator variable.
The stored currentInput value is put into previousInput variable,
and currentInput is cleared to make room for the new number (second operand).

User enters currentInput (n digits) for second operand.
appendNumber() takes each clicked digit, and stores it in currentInput variable.
At the same time, updateDisplay() updates input-field (aka calculator display bar) with currentInput.

User clicks equals "=" symbol, which calls calculate() function.
Based on stored values, result is obtained and updated to display.
In the memory, previous value, current value, operator are all cleared.
*/


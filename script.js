
// @ PseudoCode on paper

// functions

function add(numOne, numTwo) { // add's two numbers togheter
    return numOne + numTwo;
};

function substract(numOne, numTwo) { // subtsracts number one with number two
    return numOne - numTwo;
};

function multiply(numOne, numTwo) { // multiplies two numbers
    return numOne * numTwo;
};

function divide(numOne, numTwo) { // divide number one by number two
    return numOne / numTwo;
};

function operate(operator, numOne, numTwo) { // this function takes an operator and invokes the corresponding function
    if (operator == '+') {
        return add(numOne, numTwo);

    } else if (operator == '-') {
        return substract(numOne, numTwo);

    } else if (operator == '*') {
        return multiply(numOne, numTwo);

    } else if (operator == '/') {
        return divide(numOne, numTwo);
    } 
}

console.log(operate('+', 10, 2));
console.log(operate('-', 10, 2));
console.log(operate('*', 10, 2));
console.log(operate('/', 10, 2));
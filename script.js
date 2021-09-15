
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

let startingValue = '0,00';
let displayValue = '';
let inputValueOne = [];
let operator = ''


const display = document.getElementById('display');
display.textContent = startingValue;

const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        inputValueOne.push(button.value);
        display.textContent = inputValueOne.join('');
    });
});

const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        operator = button.value;
        console.log(inputValueOne);
        console.log(operator);
    })
   
});

const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () => {
    display.textContent = startingValue;
    inputValueOne = [];
    console.log(inputValueOne);
});
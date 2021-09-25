
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

function percentage(numOne, numTwo) { // to do add percentage functionality
    return nothing;
}

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

let startingValue = '0';
let displayValue = '';
let inputValueOne = [];
let inputValueTwo = [];
let storedNumber = '';
let operator = '';
let multipleEquations = false;


const display = document.getElementById('display');
display.textContent = startingValue;

const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (operator) {
            inputValueTwo.push(button.value);
            display.textContent = inputValueTwo.join('');
        } else {
            inputValueOne.push(button.value);
            display.textContent = inputValueOne.join('');
        }
    });
});

const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (multipleEquations) {
            let answer = operate(operator, Number(storedNumber), Number(inputValueTwo.join('')))
            display.textContent = answer;
            storedNumber = answer;
            operator = button.value;
            inputValueTwo = [];
           
        } else if (operator) {
            let answer = operate(operator, Number(inputValueOne.join('')), Number(inputValueTwo.join('')))
            display.textContent = answer;
            storedNumber = answer;
            operator = button.value;
            inputValueTwo = [];
            multipleEquations = true;
        } else {  
            operator = button.value;
            display.textContent = operator;
            
        };
        
        
    });
   
});

const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () => {
    display.textContent = startingValue;
    inputValueOne = [];
    inputValueTwo = [];
    operator = '';
    storedNumber = '';
    multipleEquations = false;
    
});


const equalsButton = document.querySelector('.equals');
equalsButton.addEventListener('click', () => {
    
    if (operator && inputValueTwo) {
    
        if (multipleEquations) {
            let answer = operate(operator, Number(storedNumber), Number(inputValueTwo.join('')));
            display.textContent = answer;
        } else {
            let answer = operate(operator, Number(inputValueOne.join('')), Number(inputValueTwo.join('')))
            display.textContent = answer;
        };
    
    };
});

const darkMode = document.querySelector('.dark-mode');
const bodyColor = document.querySelector('body');
const headerColor = document.querySelector('header');
const githubIcon = document.querySelector('icon');
darkMode.addEventListener('click', () => {
    
    if (darkMode.textContent == 'Dark Mode') {
        darkMode.textContent = 'Light Mode';
        darkMode.style.color = 'white';
        bodyColor.style.backgroundColor = '#121212';
        headerColor.style.color = 'white';
        githubIcon.style.color = 'white';
    } else {
        darkMode.textContent = 'Dark Mode';
        darkMode.style.color = 'black';
        bodyColor.style.backgroundColor = 'white';
        headerColor.style.color = 'black';
        githubIcon.style.color = 'black'; // bug with github icon?
    };
});
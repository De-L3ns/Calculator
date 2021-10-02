
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
let startingValueTop = '0'
let equationValue = [];
let displayValue = '';
let inputValueOne = [];
let inputValueTwo = [];
let storedNumber = '';
let lastCharacter = '';
let operator = '';
let multipleEquations = false;

const displayTop = document.getElementById('display-top');
const displayBot = document.getElementById('display-bot');
displayTop.textContent = startingValueTop;
displayBot.textContent = startingValue;

const numberButtons = document.querySelectorAll('.number'); // this contains the logic for number buttons (including .)
numberButtons.forEach((button) => {                         // being pressed.
    button.addEventListener('click', () => {
        
        
        
        
        if (operator) { // if an operator is allready present inputValueTwo has to be updated instead of inputValueOne
            if (lastCharacter == '.') {
                lastCharacter = button.value; // this here makes sure you can not add multiple . 
                
                
            
            
            
            } else {
                lastCharacter = button.value;
                inputValueTwo.push(button.value);
                equationValue.push(button.value);
                displayBot.textContent = inputValueTwo.join('');
                displayTop.textContent = equationValue.join('');
            };
            
        } else {
            if (lastCharacter == '.') { // this here makes sure you can not add multiple . 
                lastCharacter = button.value;
                
                
                
            } else {
                lastCharacter = button.value;
                inputValueOne.push(button.value);
                equationValue.push(button.value);
                displayBot.textContent = inputValueOne.join('');
                displayTop.textContent = equationValue.join('');
            }
            
            
        };
    });
});

const operatorButtons = document.querySelectorAll('.operator'); // logic for the operator buttons
operatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (multipleEquations) { // checks if there is allready an equation being made so the result is used
            let answer = operate(operator, Number(storedNumber), Number(inputValueTwo.join('')));
            equationValue = [];
            equationValue.push(answer);
            equationValue.push(' ');
            equationValue.push(button.value);
            equationValue.push(' ');
            displayTop.textContent = equationValue.join('');
            displayBot.textContent = answer;
            storedNumber = answer;
            operator = button.value;
            inputValueTwo = [];
           
        } else if (operator) { //checks if there is allready an operator present so multiple equations can be made
            let answer = operate(operator, Number(inputValueOne.join('')), Number(inputValueTwo.join('')));
            displayBot.textContent = answer;
            storedNumber = answer;
            operator = button.value;
            inputValueTwo = [];
            equationValue = [];
            equationValue.push(answer);
            equationValue.push(' ');
            equationValue.push(button.value);
            equationValue.push(' ');
            displayTop.textContent = equationValue.join('');
            multipleEquations = true;
        } else {  
            equationValue.push(' '); 
            equationValue.push(button.value);
            equationValue.push(' ');
            operator = button.value;
            displayTop.textContent = equationValue.join('');
            displayBot.textContent = operator;
            
        };
        
        
    });
   
});

const clearButton = document.querySelector('.clear'); // this button clears the whole screen and resets the variabels.
clearButton.addEventListener('click', () => {
    displayBot.textContent = startingValue;
    displayTop.textContent = startingValue;
    inputValueOne = [];
    inputValueTwo = [];
    equationValue = [];
    operator = '';
    storedNumber = '';
    multipleEquations = false;
    
});


const equalsButton = document.querySelector('.equals'); // the equals button shows the result on the screen
equalsButton.addEventListener('click', () => { 
    
    if (operator && inputValueTwo) {
    
        if (multipleEquations) {
            let answer = operate(operator, Number(storedNumber), Number(inputValueTwo.join('')));
            equationValue = [];
            equationValue.push(' = ');
            equationValue.push(answer);
            displayTop.textContent = equationValue.join('');
            displayBot.textContent = answer;
        } else {
            let answer = operate(operator, Number(inputValueOne.join('')), Number(inputValueTwo.join('')))
            equationValue = [];
            equationValue.push(' = ');
            equationValue.push(answer);
            displayTop.textContent = equationValue.join('');
            displayBot.textContent = answer;
        };
    
    };
});

// logic for the dark mode and changing components
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
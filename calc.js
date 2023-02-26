const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");

const dot = document.querySelector(".decimal");
const clear = document.querySelector(".clear");
const equal = document.querySelector(".equal");
const calcScreen = document.querySelector(".calcScreen");


let displayValue = "0";
let firstNum = "";
let secondNum = "";
let operator = "";


numbers.forEach(number => {
    number.addEventListener("click", e => {
        if (operator === "") { 
            // Read first number if no operator set yet
            firstNum += e.target.innerText;

            console.log(firstNum)
        } else { // Read second number
            secondNum += e.target.innerText;
            console.log(secondNum)
        }
        displayValue = firstNum + " " + operator + " " + secondNum;
        calcScreen.textContent = displayValue;
        console.log(calcScreen);

    });
});

operators.forEach(op => {
    op.addEventListener("click", e => {
        operator = e.target.innerText;
        console.log(operator)

        displayValue = firstNum + " " + operator + " " + secondNum;
        calcScreen.textContent = displayValue;
        console.log(calcScreen);
        // If equals operator, perform operation
    });
});

clear.addEventListener("click", e => {
    firstNum = "";
    secondNum = "";
    operator = "";
    displayValue = "0";
});

equal.addEventListener("click", e => {

    console.log(firstNum);
    console.log(secondNum);
    console.log(operator);

    displayValue = operate(parseInt(firstNum), parseInt(secondNum), operator);
    console.log(displayValue);

    calcScreen.textContent = displayValue;
    firstNum = displayValue;
    secondNum = "";
    operator = "";

})


function add(num1, num2){
    console.log(num1+num2)
    return num1+num2
};

function subtract(num1, num2){
    console.log(num1-num2)
    return num1-num2
};

function multiply(num1, num2){
    console.log(num1*num2)
    return (num1*num2)
};

function divide(num1, num2){
    console.log(num1/num2)
    return (num1/num2)
};

function operate(num1, num2, opChar){
    switch (opChar) 
    {
        case "+":
          return add(num1, num2);
          break;

        case "-":
            return subtract(num1, num2);
            break;

        case "*":
            return multiply(num1, num2);
            break;

        case "/":
            return divide(num1, num2);
            break;

          default:
            console.log("default value");
            return 0
            break;
    };
};




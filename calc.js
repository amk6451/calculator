const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");

const dot = document.querySelector(".decimal");
const clear = document.querySelector(".clear");
const equal = document.querySelector(".equal");
const calcScreen = document.querySelector(".calcScreen");

let displayValue = "";
let firstNum = "";
let secondNum = "";
let operator = "";


numbers.forEach(number => {

    number.addEventListener("click", e => {
        if (operator === "") { 

            // Set first number if no operator set yet
            firstNum += e.target.innerText;
            displayValue = firstNum;
            console.log(firstNum);
        } 
        else { 
            //Set second number
            secondNum += e.target.innerText;
            displayValue = secondNum;
            console.log(secondNum)
        }
        calcScreen.textContent = displayValue;
    });
});

operators.forEach(op => {
    op.addEventListener("click", e => {

        //Don't set operator if first term doesn't exist
        if (firstNum == "") {
            return
        } 
        
        // Ex: [12 + 7] - 9; calculator evaluates pair of terms first before updating operator 
        if (secondNum !== ""){
            displayValue = operate(parseFloat(firstNum), parseFloat(secondNum), operator);
            calcScreen.textContent = displayValue;
            firstNum = displayValue;
            secondNum = "";
        }

        operator = e.target.innerText;
        // console.log(operator)
    });
});

clear.addEventListener("click", e => {
    firstNum = "";
    secondNum = "";
    operator = "";
    displayValue = "";
    calcScreen.textContent = displayValue;
});

equal.addEventListener("click", e => {

    console.log(firstNum);
    console.log(secondNum);
    // console.log(displayValue);
    // console.log(displayValue);

    displayValue = operate(parseFloat(firstNum), parseFloat(secondNum), operator);
    



    calcScreen.textContent = displayValue;
    firstNum = displayValue;
    secondNum = "";
    operator = "";

})
dot.addEventListener("click", e => {

if(displayValue === firstNum && firstNum.includes(".") == false){
    firstNum += e.target.innerText;
    displayValue = firstNum;
}

if(displayValue === secondNum && secondNum.includes(".") == false){
    secondNum += e.target.innerText;
    displayValue = secondNum;
}
calcScreen.textContent = displayValue
 
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
      if (isFinite(num1/num2) == false) {
        return "NaN";
  }
  else {
    return (num1/num2)
  }

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




function add(a, b) {

    return a + b;

};

function subtract(a, b) {

    return a - b;

};

function multiply(a, b) {

    return a * b;

};

function divide(a, b) {

    return a / b;

};

function percent(a) {

    return a / 100;

}

function operate(a, b, operation) {

    return operation(a, b);

}

function updateDisplay() {

    input.textContent = `${firstNum} ${operator} ${secondNum}`;

};

function addUp(value) {

    if (focusFirst) {
        firstNum = `${firstNum}${value}`;
        updateDisplay();
    } else {
        secondNum = `${secondNum}${value}`;
        updateDisplay();
    }

}

function switchOperator(value) {

    if (value == "%") {
        operator = `${value}`;
        updateDisplay();
    } else if (!(firstNum == "")) {
        operator = `${value}`;
        focusFirst = false;
        updateDisplay();
    }

};

let operator = "";
let firstNum = "";
let secondNum = "";
let focusFirst = true;

window.addEventListener("keydown", (e) => {

    let pressedKey = e.key;

    console.log(pressedKey);

    switch (pressedKey) {

        case("0") :
            addUp(0);
        break;

        case("1") :
            addUp(1);
        break;

        case("2") :
            addUp(2);
        break;

        case("3") :
            addUp(3);
        break;

        case("4") :
            addUp(4);
        break;

        case("5") :
            addUp(5);
        break;

        case("6") :
            addUp(6);
        break;

        case("7") :
            addUp(7);
        break;

        case("8") :
            addUp(8);
        break;

        case("9") :
            addUp(9);
        break;

        case("0") :
            addUp(0)
        break;

        case("0") :
            addUp(0)
        break;

        case("0") :
            addUp(0)
        break;

        case("Delete") :
            operator = "";
            firstNum = "";
            secondNum = "";
            focusFirst = true;
            updateDisplay();
        break;

        case("Backspace") :

            if (!(secondNum == "")) {
                secondNum = secondNum.slice(0, -1);
            } else if (!(operator == "")) {
                operator = operator.slice(0, -1);
            } else {
                firstNum = firstNum.slice(0, -1);
            }
        
            updateDisplay();

        break;

        case("%") :
            switchOperator("%");
        break;

        case(":") :
            switchOperator(":");
        break;

        case("*") :
            switchOperator("*");
        break;

        case("+") :
            switchOperator("+");
        break;

        case("-") :

            if (focusFirst) {

                if (!(firstNum == "")) {
                    operator = "-";
                    focusFirst = false;
                    updateDisplay();
                } else {
                    firstNum = "-"
                    updateDisplay();
                }
        
            } else {
                if (secondNum == "" && !(operator == "")) {
                    secondNum = "-"
                    updateDisplay();
                } else {
                    operator = "-"
                    updateDisplay();
                }
            }
        
        break;

        case(",") :

            if (focusFirst) {

                if (firstNum == "") {
                    firstNum = `0.`;
                    updateDisplay();
                } else if (firstNum.includes(".")) {
                    updateDisplay();
                } else {
                    firstNum = `${firstNum}.`;
                    updateDisplay();
                }
        
            } else {
        
                if (secondNum == "") {
                    secondNum = `0.`;
                    updateDisplay();
                } else if (secondNum.includes(".")) {
                    updateDisplay();
                } else {
                    secondNum = `${secondNum}.`;
                    updateDisplay();
                }
        
            }
            
        break;

        case("Enter") :

            switch(operator) {
            
                case("+") :
                    firstNum = +operate(+firstNum, +secondNum, add).toFixed(2);
                break;
                
                case("-") :
                    firstNum = +operate(+firstNum, +secondNum, subtract).toFixed(2);
                break;
        
                case("*") :
                    firstNum = +operate(+firstNum, +secondNum, multiply).toFixed(2);
                break;
        
                case(":") :
                    firstNum = +operate(+firstNum, +secondNum, divide).toFixed(2);
                break;
        
                case("%") :
                    firstNum = operate(+firstNum, +secondNum, percent);
                break;
                
            }
        
            firstNum = `${firstNum}`;
            secondNum = "";
            operator = "";
            focusFirst = true;
            updateDisplay();
            if (firstNum == Infinity) {
                input.textContent = "Can't do that";
                firstNum = "";
            }

        break;
    

    }

});

clearBtn.addEventListener("click", () => {
    operator = "";
    firstNum = "";
    secondNum = "";
    focusFirst = true;
    updateDisplay();
});

percentBtn.addEventListener("click", () => switchOperator("%"));
divideBtn.addEventListener("click", () => switchOperator(":"));
multiplyBtn.addEventListener("click", () => switchOperator("*"));
addBtn.addEventListener("click", () => switchOperator("+"));
subtractBtn.addEventListener("click", () => {

    if (focusFirst) {

        if (!(firstNum == "")) {
            operator = "-";
            focusFirst = false;
            updateDisplay();
        } else {
            firstNum = "-"
            updateDisplay();
        }

    } else {
        if (secondNum == "" && !(operator == "")) {
            secondNum = "-"
            updateDisplay();
        } else {
            operator = "-"
            updateDisplay();
        }
    }

});

backspaceBtn.addEventListener("click", () => {

    if (!(secondNum == "")) {
        secondNum = secondNum.slice(0, -1);
    } else if (!(operator == "")) {
        operator = operator.slice(0, -1);
    } else {
        firstNum = firstNum.slice(0, -1);
    }

    updateDisplay();

});

num0.addEventListener("click", () => addUp(0));
num1.addEventListener("click", () => addUp(1));
num2.addEventListener("click", () => addUp(2));
num3.addEventListener("click", () => addUp(3));
num4.addEventListener("click", () => addUp(4));
num5.addEventListener("click", () => addUp(5));
num6.addEventListener("click", () => addUp(6));
num7.addEventListener("click", () => addUp(7));
num8.addEventListener("click", () => addUp(8));
num9.addEventListener("click", () => addUp(9));
comaBtn.addEventListener("click", () => {

    if (focusFirst) {

        if (firstNum == "") {
            firstNum = `0.`;
            updateDisplay();
        } else if (firstNum.includes(".")) {
            updateDisplay();
        } else {
            firstNum = `${firstNum}.`;
            updateDisplay();
        }

    } else {

        if (secondNum == "") {
            secondNum = `0.`;
            updateDisplay();
        } else if (secondNum.includes(".")) {
            updateDisplay();
        } else {
            secondNum = `${secondNum}.`;
            updateDisplay();
        }

    }

});

enterBtn.addEventListener("click", () => {

    switch(operator) {
        
        case("+") :
            firstNum = +operate(+firstNum, +secondNum, add).toFixed(2);
        break;
        
        case("-") :
            firstNum = +operate(+firstNum, +secondNum, subtract).toFixed(2);
        break;

        case("*") :
            firstNum = +operate(+firstNum, +secondNum, multiply).toFixed(2);
        break;

        case(":") :
            firstNum = +operate(+firstNum, +secondNum, divide).toFixed(2);
        break;

        case("%") :
            firstNum = operate(+firstNum, +secondNum, percent);
        break;
        
    }

    firstNum = `${firstNum}`;
    secondNum = "";
    operator = "";
    focusFirst = true;
    updateDisplay();
    if (firstNum == Infinity) {
        input.textContent = "Can't do that";
        firstNum = "";
    }

});
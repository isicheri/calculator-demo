const circleToggler = document.querySelector(".circle")
const calculatorCon = document.querySelector(".calculator")
const btns = document.querySelectorAll(".button")
const currentCon = document.querySelector(".current-con")


circleToggler.addEventListener("click",() => {
circleToggler.classList.toggle("toggle")
calculatorCon.classList.toggle("toggle-color")
btns.forEach((btn) => {
    btn.classList.toggle("toggle-color-btn")
})
currentCon.classList.toggle("toggle-text-color")
})


class Calculator {
constructor(previousOperand,currentOperand){
    this.previousOperand = previousOperand;
    this.currentOperand = currentOperand;
    this.clear();
}
clear(){
    this.previousOPeration = ""
    this.currentOPeration = ""
    this.operation = ''
}
delete() {
this.currentOPeration = this.currentOperand.innerText.toString().slice(0,-1)
}
appendNumber(number) {
    // if(number === "." && this.currentOperation.includes(".")) return;
    // console.log(this.currentOPeration.includes("."))
    // console.log(this.currentOperand.innerText.includes("."));
    // console.log(number === ".")
    if(number === "." &&this.currentOperand.innerText.includes(".")) return;
    this.currentOPeration = this.currentOperand.innerText.toString() + number.toString();
}
chooseOperation(operation) {
this.previousOPeration = this.currentOPeration;
if(this.previousOPeration !== "" && this.currentOPeration === "") {
    this.compute()
    // this.currentOPeration = ""
    // this.previousOperation = ""
}
this.currentOPeration = "";
this.operation = operation;
}
compute() {
let computation;
if(this.currentOPeration == "") return;
if(this.previousOPeration == "") return;
let prev = parseFloat(this.previousOPeration)
let cur = parseFloat(this.currentOPeration)
switch (this.operation) {
    case "+":
        computation = prev + cur
        break;

    case "-":
        computation = prev - cur
        break;
    case "*": 
    computation = prev * cur    
    break;
    case "/" :
    computation = prev / cur
    break;
    default:
        return
}
this.currentOPeration = computation;
this.previousOPeration = "";
this.operation = '';
}
updateDisplay() {
    this.currentOperand.innerText = this.currentOPeration;
    if(this.previousOPeration !== null) {
            this.previousOperand.innerText = `${this.previousOPeration} ${this.operation}`
    }else {
     this.previousOPeration = ""
    }
}
}

const previousOperand = document.querySelector("[data-previous-operand]")
const currentOperand = document.querySelector("[data-current-operand]")
const ACbtn = document.querySelector("[data-ac]")
const delbtn = document.querySelector("[data-del]")
const numBtn = document.querySelectorAll("[data-num]")
const operBtn = document.querySelectorAll("[data-operator]")
const eql = document.querySelector('[data-equals]')


const calculator = new Calculator(previousOperand,currentOperand)

numBtn.forEach((num) => {
    num.addEventListener("click",() => {
   calculator.appendNumber(num.innerText)
   calculator.updateDisplay()
    })
})

operBtn.forEach((num) => {
    num.addEventListener("click",() => {
   calculator.chooseOperation(num.innerText)
   calculator.updateDisplay();
    })
})

eql.addEventListener("click",() => {
    calculator.compute();
    calculator.updateDisplay();
})

delbtn.addEventListener("click",() => {
    calculator.delete();
    calculator.updateDisplay();
})


ACbtn.addEventListener("click",() => {
    calculator.clear()
    calculator.updateDisplay()
})

// const hoverDiv = document.querySelector(".hover")

// hoverDiv.addEventListener("mousemove",(data) => {
//     hoverDiv.style.backgroundColor = `rgb(${data.clientX},${data.clientY},${data.clientX - data.clientY})`
//   console.log(data)
// })

const CI = document.querySelector(".ci")
const DD = document.querySelector(".drop-down")
const cc = document.querySelector(".con-ci")

CI.addEventListener("click",() => {
DD.classList.toggle("active")
cc.classList.toggle("active-ci")
})
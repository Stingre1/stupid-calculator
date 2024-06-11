/**
 * PROBLEMS:
 * BUG: If an error occurs and then you try to input a new expression the second operand can only be one digit long. Something to do with the boolean variable clearing the text field. Needs more thought
 * This entire thing is way to complicated for no reason.
 */


//Can't get import to work with HTML.
//calc2.js is the same javascript file with the Stack class in the same file.
import Stack from './Stack.js';
  
var stack = new Stack();
let completedPreviousExpression = true;
let textbox = document.querySelector(".text-field")

function clearTextbox() {
    textbox.value = "";
}

function isTextboxOperator() {
    switch(stack.peek()) {
        case '+':
        case '-':
        case '*':
        case '/':
            return true
        default: 
            return false
    }
}

function keyNumber(digit) {
    if(isTextboxOperator()){
        clearTextbox()
    }
    if(completedPreviousExpression === true || textbox.value === "error occurred.") {
        stack.clear();
        clearTextbox()
    }
    console.log("completedPreviousExpression: " + completedPreviousExpression)
    textbox.value += digit
    completedPreviousExpression = false
}
 
function keyOperator(operator) {
    stack.push(textbox.value) //the operand
    stack.push(operator)
    console.log("Expression: " + stack.items.join(' '))
    textbox.value = operator
    
}

function keyEquals() {
    try {
        stack.push(textbox.value)
        let expression = stack.items.join(' ')
        console.log("Expression: " + expression)
        result = eval(expression)
        console.log("Result: " + result)
        textbox.value = result
    } catch {
        textbox.value = "error occurred."
    }
    completedPreviousExpression = true
}

function clearPrompt() {
    if(!stack.isEmpty()) {
        stack.push(textbox.value)
        textbox.value = "click to clear"
    }
}

function clearUnprompt() {
    if(!stack.isEmpty()) {
        textbox.value = stack.pop()
    }
}

function clear() {
    stack.clear()
    clearTextbox()
}

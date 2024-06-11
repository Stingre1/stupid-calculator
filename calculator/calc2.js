/**
 * PROBLEMS:
 * FIXED ~~BUG: If an error occurs and then you try to input a new expression the second operand can only be one digit long. Something to do with the boolean variable clearing the text field.~~
 * This entire thing is way too complicated for no reason.
 */


//IN USE
class Stack {
    constructor() {
      this.items = [];
    }
  
    // Adds an element to the top of the stack
    push(element) {
      this.items.push(element);
    }
  
    // Removes and returns the top element of the stack
    pop() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      return this.items.pop();
    }
  
    // Returns the top element of the stack without removing it
    peek() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      return this.items[this.items.length - 1];
    }
  
    // Returns true if the stack is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Returns the number of elements in the stack
    size() {
      return this.items.length;
    }
  
    // Empties the stack
    clear() {
      this.items = [];
    } 
}
  
var stack = new Stack();
let completedPreviousExpression = true;
let textbox = document.querySelector(".text-field")

function clearTextbox() {
    textbox.value = "";
}

function isTextboxOperator() {
    switch(textbox.value) {
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
    if(completedPreviousExpression === true || textbox.value === "error occurred ") {
        stack.clear();
        clearTextbox()
    }
    // console.log("completedPreviousExpression: " + completedPreviousExpression)
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
        textbox.value = "error occurred "
    }
    completedPreviousExpression = true
}

function clearPrompt() {
    if(!stack.isEmpty()) {
        stack.push(textbox.value)
        textbox.value = "click to clear "
    }
}

function clearUnprompt() {
    if(!stack.isEmpty()) {
        textbox.value = stack.pop()
    }
}

function clearClick() {
    stack.clear()
    clearTextbox()
    // console.log("clear() function finish")
}

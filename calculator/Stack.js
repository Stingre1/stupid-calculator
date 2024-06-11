export default class Stack {
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
class Stack {
  constructor() {
    this.array = [];
  }

  peek() {
    return console.log(this.array[this.array.length - 1]);
  }

  push(value) {
    this.array.push(value);
    return console.log(this);
  }

  pop() {
    this.array.pop();
    return console.log(this);
  }
}

const myStack = new Stack();

myStack.push('google');
myStack.push('udemy');
myStack.push('discord');
myStack.peek();
myStack.pop();
myStack.pop();
myStack.pop();
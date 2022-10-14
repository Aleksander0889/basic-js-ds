const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
  // const stack = new Stack();
  stack = []
  class Stack {
  // constructor(...arg ) {
  //   this.store = [... arg.reverse()]
  // }
 
stack = []
  push(element) {
    return this.stack.unshift(element)
    console.log(stack);
  }
  pop(){
    return this.stack.shift();
    console.log(stack)
  }
  peek() {
    return this.stack[0];
    console.log(stack)
  }
}

module.exports = {
  Stack
};

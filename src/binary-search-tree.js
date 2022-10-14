const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
 constructor () {
  this.root1 = null;
 }
  root() {
    return this.root1 ? this.root1 :null
  }

  add(value) {
    this.root = addWithin(this.root1, value)
  

  function addWithin(node, value) {
    if(!node) {
      return new Node(value)
    }
    if(node.value === value) {
      return node;
    }
    if (value < node.value) {
      node.left = addWithin(node.left, value)
    } else {
      node.right = addWithin(node.right, value)
    }
    return node
  }};
  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};
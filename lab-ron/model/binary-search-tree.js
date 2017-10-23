module.exports = class BinarySearchTree {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }

  // Add an insert method that appends a node to the BST


  insert(node) {
    if (!(node instanceof BinarySearchTree)) {
      throw new Error('BINARY_TREE_ERROR: this is not a Binary Search Tree')
    }
  }
}


// Add a remove method that removes a node from a BST
// Add a find method that takes in a predicate function and returns a node
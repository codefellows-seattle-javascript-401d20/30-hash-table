module.exports = class BinarySearchTree {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
    this.parent = null
  }
  // Add an insert method that appends a node to the BST


  insert(node) {
    if (!(node instanceof BinarySearchTree))
      throw new Error('--> BINARY_TREE_ERROR: this is not a Binary Search Tree')


    if (node.value === this.value)
      return

    if (this.value < node.value) {
      if (!this.right) {
        return this.right = node
      }
      else
        return this.right.insert(node)
    }

    if (!this.left) {
      return this.left = node
    }
    else
      return this.left.insert(node)

  }
  // Add a find method that takes in a predicate function and returns a node

  find(value) {
    if (this.value === value) {
      return true
    }

    if (this.value > value) {
      if (!this.left)
        return false
      return this.left.find(value)
    }

    if (!this.right)
      return false
    return this.right.find(value)

  }

  // Add a remove method that removes a node from a BST

  // remove(value) {
  //   // at root
  //   if (this.value < value) {
  //     if (!this.right){}
  //   }
  // }

}




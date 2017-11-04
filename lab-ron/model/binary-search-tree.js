module.exports = class BinarySearchTree {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
  // Add an insert method that appends a node to the BST


  insert(value) {
    // if (!(node instanceof BinarySearchTree)) {
    //   throw new Error('--> BINARY_TREE_ERROR: this is not a Binary Search Tree')
    // }

    if (!this.value) {
      this.value = value
    }

    // if (this.value > value) {
    //   console.log('---> LEFT', value)
    //   this.left = bst
    //   return bst.insert(value)
    // }


    //   if (!(node instanceof DoublyLinkedList))
    //     throw new Error('__USAGE_ERROR__: Node must be a DoublyLinkedList');
    //   if (!this.next) {
    //     node.prev = this;
    //     this.next = node;
    //   }
    //   else
    //     this.next.append(node);
    //   return this;
    // }

    // if (this.value < value) {
    //   console.log('---> RIGHT', value)
    //   this.right = bst
    //   return bst.insert(value)
    // }
    // if (this.value < value) {
    //   console.log('---> INSIDE RIGHT', value)
    //   this.right = bst
    //   this.right = bst.value
    // }

    // if (this.value === value) {

    //   return
    // }








    return this
  }
}


// Add a remove method that removes a node from a BST
// Add a find method that takes in a predicate function and returns a node
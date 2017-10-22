'use strict'

const Node = require('./node.js')

module.exports = class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const node = new Node(data);
    if (this.root === null) {
      this.root = node
    } else {
      let current = this.root
      let parent
      while(true) {
        parent = current;
        if (data < current.data) {
          current = current.left;
          if (current === null) {
            parent.left = node;
            break;
          }
        } else {
          current = current.right;
          if (current === null) {
            parent.right = node;
            break;
          }
        }
      }
    }
  }

  
}

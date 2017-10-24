'use strict';

class BinarySearchTree {
  constructor(value){
    this.value = value;
    this.next = null;
    this.previous = null;
  }

  insert(value) {
    let currentNode = new BinarySearchTree(value);
    let createTree = function() {
      while(this.value !== currentNode.value)
        if(this.value < currentNode.value && currentNode.previous === null)
          currentNode.previous = this;
      if(this.value < currentNode.value && currentNode.previous !== null)
        return createTree(currentNode.previous);
      if (this.value > currentNode.value && currentNode.next === null)
        currentNode.next = this;
      if(this.value > currentNode.value && currentNode.next !== null)
        return createTree(currentNode.next);
    };
  }
}

module.exports = BinarySearchTree;

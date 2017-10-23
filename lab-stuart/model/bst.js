'use strict';

class BST {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(node){
    if(!(node instanceof BST))
      throw new Error('Node must be a bst. ');
    if(node.value === this.value)
      return;
    if(node.value < this.value){
      if(!this.left){
        this.left = node;
        return;
      }
      this.left.insert(node);
      return;
    }
    if(!this.right){
      this.right = node;
      return;
    }
    this.right.insert(node);
  }

  remove(node) {
    if(!(node instanceof BST))
      throw new Error('Node must be a bst. ');

    if (this === node) {
      return this.right;
    } else if (!this.right) {
      return this;
    } else if (this.right === node) {
      this.right = this.right.right;
    } else {
      this.right.remove(node);
    }
    return this;
  }

  find(predicate) {
    if (typeof predicate !== 'function') {
      throw new TypeError('::BST_ERROR:: Predicate should be a function. ');
    }
    if (predicate(this) === true) {
      return this;
    } else if (this.right) {
      return this.right.find(predicate);
    } else {
      return null;
    }
  }
}

module.exports = BST;

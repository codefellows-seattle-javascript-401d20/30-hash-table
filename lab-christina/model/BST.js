'use strict';

class BinarySearchTree {
  constructor(value){
    this.value = value;
    this.next = null;
    this.previous = null;
  }

  insert(node) {
    if(!(node instanceof BinarySearchTree))
      throw new Error('__ERROR__Must be a tree');
    if(node.value < this.value && !this.previous)
      this.previous = node;
    if(node.value > this.value && !node.next)
      this.next = node;
  }

  remove(node) {
    if(!(node instanceof BinarySearchTree))
      throw new Error('__ERROR__ must be a tree');
    if(this === node) {
      let prev = this.previous;
      prev.next = prev.next.next;
      prev.next.previous = prev;
    } else {
      if(!this.next)
        return this;
      this.next.remove(node);
    }
  }

  find(predicate) {
    if(typeof predicate !== 'function') {
      throw new TypeError('_BST_ERROR_ predicate should be a function');
    }
    if(predicate(this) === true) {
      return this;
    } else if (this.next) {
      return this.next.find(predicate);
    } else{
      return null;
    }
  }
}
module.exports = BinarySearchTree;

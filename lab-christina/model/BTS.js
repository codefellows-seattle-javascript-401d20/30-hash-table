'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class BinarySearchTree {
  constructor(node){
    this.root = null;
  }

  insert(node) {
    if(!(node instanceof BinarySearchTree))
      throw new Error('Must be a tree');
    if(!this.root)
      this.root = new Node(node);
      return;
    let createTree = function(node) {
    while(this.root)
    if(this.root.previous)
      return createTree(this.previous)
    if(this.value < this.root.value && !this.root.previous)
      this.root.previous = this;
      return this;
    else if (his.value > this.root.value && !this.root.next)
      this.root.next = this;
      return this;
  }
}

  remove(node){
    if(!(node instanceof BinarySearchTree))
    throw new Error('Node must be a tree');
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
}

module.exports = BinarySearchTree;

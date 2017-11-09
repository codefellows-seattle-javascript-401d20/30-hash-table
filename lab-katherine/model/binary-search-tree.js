'use strict';

module.exports = class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    let bstNode = value;
    if (bstNode.key === this.value.key){
      this.value.value = bstNode.value;
    }
    if (bstNode.key < this.value.key){
      if(this.left === null){
        this.left = new BinarySearchTree(bstNode);
      }
      else {
        return this.left.insert(value);
      }
    }
    if(bstNode.key > this.value.key) {
      if(this.right === null){
        this.right = new BinarySearchTree(bstNode);
      }
      else {
        return this.right.insert(value);
      }
    }
  }

  find(key){
    // let bstNode = key;
    console.log('this: ', this);
    console.log('this.value: ', this.value);
    console.log('this: ', this);
    if(key === this.value.key) {
      return this.value;
    }
    else if(this.left !== null && this.value > this.left.value){
      this.left.find(key);
    }
    else if(this.right !== null && this.value < this.right.value){
      this.right.find(key);
    }
  }
};

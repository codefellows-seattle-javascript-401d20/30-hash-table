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

  find(value){
    // let current = this.root;
    console.log('this: ', this);
    console.log('this.value: ', this.value);
    console.log('this: ', this);
    console.log('value: ', value);
    console.log('value(this.value): ', value(this.value));
    console.log('value(this): ', value(this));
    // console.log('current (this.root): ', current);
    // console.log('current.value: ', current.value);
    // console.log('current.right: ', current.right);
    // console.log('current.left: ', current.left);
    // console.log('current.right.value: ', current.right.value);
    // console.log('value(current): ', value(current));
    if(value === this.value) {
      return this.value;
    }
    else if(this.left !== null && this.value > this.left.value){
      this.left.find(value);
    }
    else if(this.right !== null && this.value < this.right.value){
      this.right.find(value);
    }
  }
};

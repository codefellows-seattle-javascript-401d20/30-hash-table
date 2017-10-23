'use strict'

const Node = require('./node.js')

module.exports = class BinarySearchTree {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }

  insert(value) {
    let bstNode = value;
    if (bstNode.value < this.value.value){
      if(this.left === null){
        this.left = new BinarySearchTree(bstNode)
      }
      else {
        return this.left.insert(value)
      }
    }
    if(bstNode.value > this.value.value) {
      if(this.right === null){
        this.left = new BinarySearchTree(bstNode)
      }
      else {
        return this.right.insert(value)
      }
    }
      // // if the entered value is less than the value of the current node
      // if(this.value !== null){
      //   if(this)
      //   // if left in the current node doesn't exist
      //   if(!currentNode.left){
      //     // assign the new node holding the passed in value to left of the current node
      //     currentNode.left = newNode;
      //     break;
      //   }
      //   else{
      //     // make the value in the current node's left into the current node
      //     currentNode = currentNode.left;
      //   }
      // }
      // else{
      //   // if right in the current node doesn't exist
      //   if(!currentNode.right){
      //     // assign the new node holding the passed in value to the right of the current node
      //     currentNode.right = newNode;
      //     break;
      //   }
      //   else{
      //     // make the current node's right into the new node
      //     currentNode = currentNode.right;
      //   }
      // }
  }

  // find(value) {
  //   let current = this.root;
  //   while (current.value !== value) {
  //     if (value < current.value) {
  //       current = current.left;
  //     } else {
  //       current = current.right;
  //     }
  //     if (current === null) {
  //       return null;
  //     }
  //   }
  //   return current;
  // }

  // find(predicate) {
  //   let current = this.root;
  //   while (predicate(this) === false) {
  //     if (current.value > current.left.value) {
  //       current = current.left;
  //     } else {
  //       current = current.right;
  //     }
  //     if (current.value === null) {
  //       return null;
  //     }
  //   }
  //   return current.value;
  // }

  find(predicate){
    if (typeof predicate !== 'function') {
      throw new TypeError('__LINKED_LIST_ERROR__ predicate should be a function')
    }
    // if (predicate(this) === true) {
    //   return this
    // } else {
    let current = this.root
    // if(current){
    //   true
    // } else {
    //   let current = this.root
    // }
    console.log('this: ', this)
    console.log('current (this.root): ', current)
    console.log('current.value: ', current.value)
    console.log('current.right: ', current.right)
    console.log('current.left: ', current.left)
    console.log('current.right.value: ', current.right.value)
    console.log('predicate(current): ', predicate(current))
    if(predicate(current) === true) {
      return current.value
    }
    else if(current.left !== null && current.value > current.left.value){
      current.left.find(predicate)
    }
    else if(current.right !== null && current.value < current.right.value){
      current.right.find(predicate)
    }
    // }
  }
}

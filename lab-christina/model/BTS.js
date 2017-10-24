'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
    this.previous = null;
  }

}
class BinarySearchTree {
  constructor(){
    this.root = null;
  }

  insert(value) {
    let node = this.root;
    if(this.root === null){
      this.root = new Node(value);
    } else {
      let createTree = function() {
        while(this.value !== node.value)
          if(this.value < node.value && node.previous === null)
            node.previous = this;
        if(this.value < node.value && node.previous !== null)
          return createTree(node.previous);
        if (this.value > node.value && node.next === null)
          node.next = this;
        if(this.value > node.value && node.next !== null)
          return createTree(node.next);
      };
    }
  }
}

new Node(4);
new Node(5);


module.exports = BinarySearchTree;

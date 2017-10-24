'use strict'

module.exports = class BinarySearchTree {
  constructor(key, value) {
    this.key = key
    this.value = value
    this.parent = null
    this.right = null
    this.left = null
  }

  _checkNode(node) {
    if (!(node instanceof BinarySearchTree))
      throw new TypeError('__BINARY_SEARCH_TREE_ERROR__ node must be a BinarySearchTree')
  }

  insert(node) {
    this._checkNode(node)

    // Key exists
    if (node.key === this.key) {
      this.value = node.value
      return this
    }

    if (node.key > this.key) {
      if (this.right)
        return this.right.insert(node)
      node.parent = this
      return this.right = node
    }
    else {
      if (this.left)
        return this.left.insert(node)
      node.parent = this
      return this.left = node
    }
  }

  remove(key) {

    let node = this.find(key)

    if(!node)
      return false

    // Root with no children
    if (!node.left && !node.right && !node.parent) {
      node.key = 'undefined'
      return true
    }
    // If the node getting removed has a left and right child, replace with its successor
    if (node.left && node.right) {
      let successor = node.right.getMinNode() // The min node from this point will replace node being removed
      node.remove(successor.key) // Remove pointers to the successor as it is being promoted
      node.key = successor.key
      node.value = successor.value
      return true
    }

    // Node has only a left child
    if (node.left) {
      if (node.parent.key > node.key)
        node.parent.left = node.left
      else
        node.parent.right = node.left
      return true
    }

    // Node has only a right child
    if (node.right) {
      if (node.parent.key > node.key)
        node.parent.left = node.right
      else
        node.parent.right = node.right
      return true
    }

    // Node has no children, then just remove it.
    if (node.parent.key > node.key)
      node.parent.left = null
    else
      node.parent.right = null

    return true
  }

  find(key) {
    if (this.key === key)
      return this

    if (key > this.key) {
      if (!this.right) return null
      return this.right.find(key)
    }

    else {
      if (!this.left) return null
      return this.left.find(key)
    }
  }

  getMinNode() {
    if (this.left)
      return this.left.getMinNode()
    return this
  }
}

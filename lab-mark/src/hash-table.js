'use strict'

const BinarySearchTree = require('./bst.js')

module.exports = class HashTable {
  constructor(capacity= 1024) {
    this._capacity = capacity
    this._buckets = new Array(capacity)
  }

  _hash(key) {
    if(typeof key !== 'string')
      throw new TypeError('__HASTABLE_ERROR_ key should be a string')
    let rawHash = 0

    for(let i in key){
      rawHash += key.charCodeAt(i)
    }

    return rawHash % this._capacity
  }

  set(key, value) {
    let hash = this._hash(key)

    if(!this._buckets[hash]){
      // Start new BST
      this._buckets[hash] = new BinarySearchTree(key, value)
      return this
    }

    let node = this._buckets[hash].find(key)

    // Update existing node
    if(node){
      node.value = value
      return this
    }
    // Create node
    this._buckets[hash].insert(new BinarySearchTree(key, value))
    return this
  }

  get(key) {
    let hash = this._hash(key)
    if(!this._buckets[hash])
      return

    let node = this._buckets[hash].find(key)

    if(node)
      return node.value
  }

  delete(key) {
    let hash = this._hash(key)

    if(!this._buckets[hash])
      return false

    let node = this._buckets[hash].find(key)

    if(node) {
      this._buckets[hash].remove(key)
      if (!this._buckets[hash].key)
        this._buckets[hash] = null
      return true
    }
    return false
  }

}

'use strict';

const BinarySearchTree = require('./binary-search-tree.js');

module.exports = class HashTable{
  constructor(capacity= 1024){
    this._capacity = capacity;
    this._buckets = new Array(capacity);
  }

  _hash(key){
    if(typeof key !== 'string')
      throw new TypeError('__HASHTABLE_ERROR_ key should be a string');
    let rawHash = 0;

    for(let i in key){
      rawHash += key.charCodeAt(i);
    }

    return rawHash % this._capacity;
  }

  set(key,htValue){
    let hash = this._hash(key);

    if(!this._buckets[hash]){
      this._buckets[hash] = new BinarySearchTree({key,htValue});
      return this;
    }

    let node = this._buckets[hash].find(node => node.value.key === key);

    if(node){
      node.value.htValue = htValue;
      return this;
    }
    this._buckets[hash].append(new BinarySearchTree({key,htValue}));
    return this;
  }

  get(key){
    let hash = this._hash(key);
    if(!this._buckets[hash])
      return;

    let node = this._buckets[hash].find(node => node.value.key === key);

    if(node)
      return node.value.htValue;
  }

  delete(key){
    let hash = this._hash(key);

    if(!this._buckets[hash])
      return false;

    let node = this._buckets[hash].find(node => node.value.key === key);

    if(node){
      this._buckets[hash] = this._buckets[hash].remove(node);
      return true;
    }
    return false;
  }
};

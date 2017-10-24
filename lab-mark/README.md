![CF](https://camo.githubusercontent.com/70edab54bba80edb7493cad3135e9606781cbb6b/687474703a2f2f692e696d6775722e636f6d2f377635415363382e706e67) Lab 30 Hash-Table
===
This lab's purpose is to teach students how to build their own hash table utilizing an array, and uses a binary search tree as the bucket that holds collisions.


## Feature Tasks  
#### BinarySearchTree
Utilizes a `BinarySearchTree` constructor using ES6 class syntax
* Has an `insert` method that appends a node to the BST
  * Arity: 1 (BST)
  * On success, return the node inserted
  * On failure due to passing in an argument that is not a BST, throw an error.
* Has a `remove` method that removes a node from a BST
  * Arity: 1 (String)
  * On success, returns true
  * On failure, due to a key not existing in the bucket, returns false.
* Has a `find` method that takes in a key and returns a node
  * Arity: 1 (String)
  * On success, returns the node with they matching key
  * On failure, due to a key not existing in the bucket, returns false.
* Has a `getMinNode` function that gets the minimum key starting from the node it is called on. (invoked during delete)
  * Arity: 0
  * On success, returns the minimum key node.

#### HashTable
* Utilizes a `HashTable` constructor that uses ES6 class syntax
  * Has a `_hash` method that computes a key's hash
    * Arity: 1 (String)
    * On success, returns the key's hash value
    * On failure, due to key not being a String, throws an error.
  * Has a `set` method that stores a key value pair
    * Arity: 2 (String, Any)
    * On success, sets the key value pair in the bucket(BST) corresponding to the hash
    * Key validation happens when calling `_hash` method.
    * Collisions are stored on the same BST/bucket.
  * Has a `get` method that retrieves a value for a given key
    * Arity: 1 (String)
    * On success, returns the value of the node that matches the key
    * On failure for having a key with no match, return undefined
  * Has a `delete` method that removes a key value pair from the HashTable
    * Arity: 1 (string)
    * On success, returns true
    * On failure due to a BST not existing in the hash index of the hash table, or if the node does not exist in the BST, return undefined.

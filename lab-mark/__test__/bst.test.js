'use strict'

const BinarySearchTree = require('../src/bst.js')

describe('Single node BST', () => {
  test('It should have a value and no right or left children', () => {
    let result = new BinarySearchTree('cool', 3)
    expect(result.value).toBe(3)
    expect(result.key).toBe('cool')
    expect(result.right).toBe(null)
    expect(result.left).toBe(null)
  })

  test('It should insert a node to the BST on the correct side', () => {
    /* Keys
      'coo' < 'cool' < 'cooll'
    */
    let result = new BinarySearchTree('cool', 3)
    result.insert(new BinarySearchTree('cooll', 4))
    result.insert(new BinarySearchTree('coo', 5))

    expect(result.value).toBe(3)
    expect(result.right.value).toBe(4)
    expect(result.left.value).toBe(5)
    expect(result.right.right).toBe(null)
    expect(result.left.left).toBe(null)
  })

  test('it should remove a node from the BST', () => {
    let result = new BinarySearchTree('cool', 3)
    result.insert(new BinarySearchTree('cooll', 4))
    result.insert(new BinarySearchTree('coo', 5))

    expect(result.value).toBe(3)
    expect(result.right.value).toBe(4)
    expect(result.left.value).toBe(5)

    result.remove('coo')
    expect(result.left).toBe(null)

    result.remove('cooll')
    expect(result.right).toBe(null)
  })

  test('Removing nodes with children should replace with correct child/successor', () => {
    let result = new BinarySearchTree(6, 6)
    result.insert(new BinarySearchTree(9, 9))
    result.insert(new BinarySearchTree(4, 4))
    result.insert(new BinarySearchTree(2, 2))
    result.insert(new BinarySearchTree(11, 11))
    result.insert(new BinarySearchTree(8, 8))
    result.insert(new BinarySearchTree(12, 12))
    result.insert(new BinarySearchTree(10, 10))

    // Left and Right children
    expect(result.right.key).toBe(9)
    result.remove(9)
    expect(result.right.key).toBe(10)

    // One right child
    expect(result.right.right.key).toBe(11)
    result.remove(11)
    expect(result.right.right.key).toBe(12)

    // One left child
    expect(result.left.key).toBe(4)
    result.remove(4)
    expect(result.left.key).toBe(2)
  })
})

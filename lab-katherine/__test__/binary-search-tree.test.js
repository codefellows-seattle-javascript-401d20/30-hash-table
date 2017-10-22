'use strict'

const BST = require('../model/binary-search-tree.js')

describe('binary search tree', () => {
  test('It should have a value and left and right should be null', () => {
    let bst = new BST()
    bst.insert(4)
    expect(bst.root.value).toBe(4)
    expect(bst.root.right).toBe(null)
    expect(bst.root.left).toBe(null)
  })

  test('It should have a value and left and right should be populated', () => {
    let bst = new BST()
    bst.insert(4)
    bst.insert(2)
    bst.insert(6)
    bst.insert(1)
    bst.insert(3)
    bst.insert(5)
    bst.insert(7)
    console.log(bst)
    expect(bst.root.value).toBe(4)
    expect(bst.root.left.value).toBe(2)
    expect(bst.root.right.value).toBe(6)
    expect(bst.root.left.left.value).toBe(1)
    expect(bst.root.left.right.value).toBe(3)
    expect(bst.root.right.left.value).toBe(5)
    expect(bst.root.right.right.value).toBe(7)
  })
})

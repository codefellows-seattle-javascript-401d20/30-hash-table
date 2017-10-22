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
})

const BST = require('../model/binary-search-tree.js')

describe('Binary Search Trees', () => {

  test('creating a new bst', () => {
    const tree = new BST(3)
    expect(tree).toBeInstanceOf(BST)
  })

  test('inserting a value', () => {
    const tree = new BST(3)
    tree.insert(5)
    // .insert(3)
    // .insert(2)


    console.log('VARIABLES:', tree.left, tree.right, tree.value)
    console.log('TYPEOF', typeof tree)
    expect(tree).toBeInstanceOf(BST)
  })
})
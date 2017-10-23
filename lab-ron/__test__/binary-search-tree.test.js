const BST = require('../model/binary-search-tree.js')

describe('Binary Search Trees', () => {

  test('creating a new bst', () => {
    const tree = new BST()
    expect(tree).toBeInstanceOf(BST)
  })

  // test('inserting a value', () => {
  //   const tree = new BST()

  //   tree.insert(3)
  //   expect(tree).toBeInstanceOf(BST)
  //   expect(tree.value).toEqual(3)
  // })
})
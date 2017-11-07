const BST = require('../model/binary-search-tree.js')

describe('Binary Search Trees', () => {
  describe('# insert', () => {

    test('creating a new bst', () => {
      const tree = new BST(3)
      expect(tree).toBeInstanceOf(BST)
    })
    test('inserting a BST', () => {
      const tree = new BST(3)
      tree.insert(new BST(5))
      tree.insert(new BST(7))
      tree.insert(new BST(2))
      tree.insert(new BST(2))
      tree.insert(new BST(4))

      expect(tree).toBeInstanceOf(BST)
      expect(tree.value).toBe(3)
      expect(tree.left.value).toBe(2)
      expect(tree.left.left).toBe(null)
      expect(tree.right.value).toBe(5)
      expect(tree.right.left.value).toBe(4)
      expect(tree.right.right.value).toBe(7)
    })

    test('Not inserting a BST', () => {
      const tree = new BST(3)

      expect(() => tree.insert(6)).toThrowError('--> BINARY_TREE_ERROR: this is not a Binary Search Tree')
      expect(() => tree.insert(2)).toThrowError('--> BINARY_TREE_ERROR: this is not a Binary Search Tree')
    })
  })

  describe('# find', () => {

    test('finding a value', () => {
      const tree = new BST(3)
      tree.insert(new BST(2))
      tree.insert(new BST(5))
      tree.insert(new BST(7))
      expect(tree.find(3)).toBe(true)
      expect(tree.find(2)).toBe(true)
      expect(tree.find(5)).toBe(true)
      expect(tree.find(7)).toBe(true)
    })

    test('value not found', () => {
      const tree = new BST(3)
      tree.insert(new BST(2))
      expect(tree.find(1)).toBe(false)
      expect(tree.find(5)).toBe(false)
    })
  })

  describe('# remove', () => {

    test('removing elements', () => {


      const tree = new BST(10)
      // left 
      tree.insert(new BST(5))
      tree.insert(new BST(2))
      // tree.insert(new BST(1))
      // tree.insert(new BST(3))
      // tree.insert(new BST(8))
      // tree.insert(new BST(7))
      // tree.insert(new BST(9))
      // // right
      // tree.insert(new BST(15))
      // tree.insert(new BST(13))
      // tree.insert(new BST(18))
      // tree.insert(new BST(16))
      // tree.insert(new BST(23))
      console.log(tree)
      tree.remove(2)
      expect(tree.left.left.value).toBe(5)
      // expect(tree.right.value).toBe(18)

    })

  })
})
'use strict';

const BinarySearchTree = require('../model/BST.js');

describe('#BinarySearchTree', () => {
  test('should have a value with next and previous properties equal to null', () => {
    let rootNode = new BinarySearchTree(8);
    expect(rootNode.value).toBe(8);
    expect(rootNode.previous).toBe(null);
    expect(rootNode.next).toBe(null);
  });

  test('INSERT a lesser value should be stored to the left', () => {
    let rootNode = new BinarySearchTree(8);
    rootNode.insert(new BinarySearchTree(7));
    expect(rootNode.value).toBe(8);
    expect(rootNode.previous.value).toBe(7);
    expect(rootNode.next).toBe(null);
  });

  test('INSERT a larger value should be stored to the right', () => {
    let rootNode = new BinarySearchTree(8);
    rootNode.insert(new BinarySearchTree(9));
    expect(rootNode.value).toBe(8);
    expect(rootNode.previous).toBe(null);
    expect(rootNode.next.value).toBe(9);
  });

  test('INSERT balanced tree test', () => {
    let rootNode = new BinarySearchTree(8);
    let lowNode = new BinarySearchTree(7);
    rootNode.insert(lowNode);
    let highNode = new BinarySearchTree(9);
    rootNode.insert(highNode);

    expect(rootNode.value).toBe(8);
    expect(rootNode.previous.value).toBe(7);
    expect(rootNode.next.value).toBe(9);
  });

  test('REMOVE -should remove a node', () => {
    let rootNode = new BinarySearchTree(8);
    let middleNode = new BinarySearchTree(9);
    rootNode.insert(middleNode);
    let rightNode = new BinarySearchTree(10);
    rootNode.insert(rightNode);

    rootNode.remove(middleNode);

    expect(rootNode.value).toBe(8);
    expect(rootNode.previous).toBe(null);
    expect(rootNode.next.value).toBe(10);
  });
});

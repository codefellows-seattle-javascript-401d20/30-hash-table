'use strict';

const BST = require('../model/binary-search-tree.js');

describe('binary search tree', () => {
  test('It should have a value and left and right should be null', () => {
    let bst = new BST({key: 'puppies', value: 4});
    expect(bst.value).toEqual({key: 'puppies', value: 4});
    expect(bst.right).toEqual(null);
    expect(bst.left).toEqual(null);
  });

  test('It should have a value and left and right should be populated', () => {
    let bst = new BST({key: 'puppies', value: 4});
    bst.insert({key: 'kittens', value: 2});
    expect(bst.value).toEqual({key: 'puppies', value: 4});
    expect(bst.left.value).toEqual({key: 'kittens', value: 2});
    expect(bst.left.right).toEqual(null);
    expect(bst.left.left).toEqual(null);
  });

  test('It should have a value and left and right should be populated', () => {
    let bst = new BST({key: 'puppies', value: 4});
    bst.insert({key: 'kittens', value: 2});
    bst.insert({key: 'guinea pigs', value: 6});
    bst.insert({key: 'canaries', value: 1});
    bst.insert({key: 'hamsters', value: 3});
    bst.insert({key: 'parakeets', value: 5});
    bst.insert({key: 'horses', value: 7});
    console.log(bst);
    console.log(bst.left.value);
    console.log(bst.right.value);
    console.log(bst.left.left.value);
    console.log(bst.left.right.value);
    console.log(bst.right.left.value);
    console.log(bst.right.right.value);
    console.log(bst.left.left.left);
    console.log(bst.left.left.right);
    expect(bst.value).toEqual({key: 'puppies', value: 4});
    expect(bst.left.value).toEqual({key: 'kittens', value: 2});
    expect(bst.right.value).toEqual({key: 'guinea pigs', value: 6});
    expect(bst.left.left.value).toEqual({key: 'canaries', value: 1});
    expect(bst.left.right.value).toEqual({key: 'hamsters', value: 3});
    expect(bst.right.left.value).toEqual({key: 'parakeets', value: 5});
    expect(bst.right.right.value).toEqual({key: 'horses', value: 7});
    expect(bst.left.left.left).toEqual(null);
    expect(bst.left.left.right).toEqual(null);
    expect(bst.left.right.left).toEqual(null);
    expect(bst.left.right.right).toEqual(null);
    expect(bst.right.left.left).toEqual(null);
    expect(bst.right.left.right).toEqual(null);
    expect(bst.right.right.left).toEqual(null);
    expect(bst.right.right.right).toEqual(null);
  });
});

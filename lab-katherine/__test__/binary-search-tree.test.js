'use strict';

const BST = require('../model/binary-search-tree.js');

describe('binary search tree', () => {
  test('It should have a value and left and right should be null', () => {
    let bst = new BST({key: 4, value: 'puppies'});
    expect(bst.value).toEqual({key: 4, value: 'puppies'});
    expect(bst.right).toEqual(null);
    expect(bst.left).toEqual(null);
  });

  test('It should have a value and left and right should be populated', () => {
    let bst = new BST({key: 4, value: 'puppies'});
    bst.insert({key: 2, value: 'kittens'});
    expect(bst.value).toEqual({key: 4, value: 'puppies'});
    expect(bst.left.value).toEqual({key: 2, value: 'kittens'});
    expect(bst.left.right).toEqual(null);
    expect(bst.left.left).toEqual(null);
  });

  test('It should have a value and left and right should be populated', () => {
    let bst = new BST({key: 4, value: 'puppies'});
    bst.insert({key: 2, value: 'kittens'});
    bst.insert({key: 6, value: 'guinea pigs'});
    bst.insert({key: 1, value: 'canaries'});
    bst.insert({key: 3, value: 'hamsters'});
    bst.insert({key: 5, value: 'parakeets'});
    bst.insert({key: 7, value: 'horses'});
    // console.log(bst);
    // console.log(bst.left.value);
    // console.log(bst.right.value);
    // console.log(bst.left.left.value);
    // console.log(bst.left.right.value);
    // console.log(bst.right.left.value);
    // console.log(bst.right.right.value);
    // console.log(bst.left.left.left);
    // console.log(bst.left.left.right);
    expect(bst.value).toEqual({key: 4, value: 'puppies'});
    expect(bst.left.value).toEqual({key: 2, value: 'kittens'});
    expect(bst.right.value).toEqual({key: 6, value: 'guinea pigs'});
    expect(bst.left.left.value).toEqual({key: 1, value: 'canaries'});
    expect(bst.left.right.value).toEqual({key: 3, value: 'hamsters'});
    expect(bst.right.left.value).toEqual({key: 5, value: 'parakeets'});
    expect(bst.right.right.value).toEqual({key: 7, value: 'horses'});
    expect(bst.left.left.left).toEqual(null);
    expect(bst.left.left.right).toEqual(null);
    expect(bst.left.right.left).toEqual(null);
    expect(bst.left.right.right).toEqual(null);
    expect(bst.right.left.left).toEqual(null);
    expect(bst.right.left.right).toEqual(null);
    expect(bst.right.right.left).toEqual(null);
    expect(bst.right.right.right).toEqual(null);
    bst.insert({key: 4, value: 'dogs'});
    expect(bst.value).toEqual({key: 4, value: 'dogs'});
  });

  test('It should return the found value', () => {
    let bst = new BST({key: 4, value: 'puppies'});
    bst.insert({key: 2, value: 'kittens'});
    bst.insert({key: 6, value: 'guinea pigs'});
    bst.insert({key: 1, value: 'canaries'});
    bst.insert({key: 3, value: 'hamsters'});
    bst.insert({key: 5, value: 'parakeets'});
    bst.insert({key: 7, value: 'horses'});
    let result = bst.find(4);
    console.log('result: ', result);
    expect(result).toEqual({key: 4, value: 'puppies'});
  });
});

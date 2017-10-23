'use strict';

const BSTConstructor = require('../model/bst.js');
const getBST = (value) => new BSTConstructor(value);

describe('bst', () => {
  test('node should have a value left and right', () => {
    let bst = getBST(4);
    expect(bst.value).toBe(4);
    expect(bst.left).toBe(null);
    expect(bst.right).toBe(null);
  });

  test('#insert should insert smaller values to the left', () => {
    let bst = getBST(2);
    bst.insert(getBST(1));
    bst.insert(getBST(-1));
    expect(bst.value).toBe(2);
    expect(bst.right).toBe(null);
    expect(bst.left.value).toBe(1);
    expect(bst.left.right).toBe(null);
    expect(bst.left.left.value).toBe(-1);
    expect(bst.left.left.left).toBe(null);
    expect(bst.left.left.right).toBe(null);
  });

  test('#insert should insert larger values to the right', () => {
    let bst = getBST(2);
    bst.insert(getBST(3));
    bst.insert(getBST(4));
    expect(bst.value).toBe(2);
    expect(bst.left).toBe(null);
    expect(bst.right.value).toBe(3);
    expect(bst.right.left).toBe(null);
    expect(bst.right.right.value).toBe(4);
    expect(bst.right.right.left).toBe(null);
    expect(bst.right.right.right).toBe(null);
  });
});

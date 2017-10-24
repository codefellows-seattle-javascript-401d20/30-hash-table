'use strict'

const HashTable = require('../src/hash-table.js')
const BinarySearchTree = require('../src/bst.js')

describe('Hash Table',() => {

  describe('Hash Table Creation',() => {
    test('default size creation',() =>{
      let ht = new HashTable()
      expect(ht._capacity).toBe(1024)
      expect(ht).toBeInstanceOf(HashTable)
    })

    test('specific size creation', () => {
      let ht = new HashTable(100)
      expect(ht._capacity).toBe(100)
    })
  })

  describe('Hash Function',() => {
    test('hash of "a" should be 97',() =>{
      let ht = new HashTable()
      expect(ht._hash('a')).toBe(97)
    })

    test('hash of "abc" should be',() =>{
      let ht = new HashTable()
      expect(ht._hash('abc')).toBe(294)
    })

    test('hash of "abc" should be modded to reflect hash capacity',() =>{
      let ht = new HashTable(100)
      expect(ht._hash('abc')).toBe(94)
    })
  })

  describe('Set Function',() => {
    test('an element should be set into the hashtable',() =>{
      let ht = new HashTable()

      ht.set('cool','beans')
      let hash = ht._hash('cool')
      expect(ht._buckets[hash]).toBeInstanceOf(BinarySearchTree)

      let bucket = ht._buckets[hash]
      expect(bucket.key).toBe('cool')
      expect(bucket.value).toBe('beans')
    })

    test('an element should be updated if the key is present',() =>{
      let ht = new HashTable()

      ht.set('cool','beans')
      let hash = ht._hash('cool')

      let bucket = ht._buckets[hash]
      expect(bucket.key).toBe('cool')
      expect(bucket.value).toBe('beans')

      ht.set('cool','fries')
      expect(bucket.value).toBe('fries')
    })

    test('an element should be added to BST if there is a collision',() =>{
      let ht = new HashTable()

      ht.set('cool','beans')
      ht.set('looc','banana')

      let hash = ht._hash('cool')
      let hashCollision = ht._hash('looc')

      expect(hash).toBe(hashCollision)

      let bucket = ht._buckets[hash]
      expect(bucket.key).toBe('cool')
      expect(bucket.value).toBe('beans')

      expect(bucket.right.key).toBe('looc')
      expect(bucket.right.value).toBe('banana')
    })
  })

  describe('Get Function',() => {
    test('getting an existing element should return its value',() =>{
      let ht = new HashTable()

      ht.set('hola','mundo')
      expect(ht.get('hola')).toBe('mundo')
    })

    test('getting a non-existing element should return undefined',() =>{
      let ht = new HashTable()
      expect(ht.get('hola')).toBe(undefined)
    })
  })

  describe('Delete Function',() => {
    test('deleting an element should remove it from the internal buckets',() =>{
      let ht = new HashTable()
      ht.set('hola','mundo')

      expect(ht.get('hola')).toBe('mundo')
      expect(ht.delete('hola')).toBe(true)
      expect(ht.get('hola')).toBe(undefined)
    })

    test('deleting a non-existing element should return false',() =>{
      let ht = new HashTable()
      expect(ht.delete('hola')).toBe(false)
    })
  })

})

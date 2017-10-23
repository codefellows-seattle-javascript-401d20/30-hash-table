class BST {
  constructor() {
    value: null
    left: null
    right: null
  }

  insert(value) {
    if (!this.value)
      return this.value = value
    if (this.left.value < value)
      this.left.insert(this)

  }
}



module.exports = BST
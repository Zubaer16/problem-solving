class Sollution {
  constructor() {
    this.arr = []
  }

  parent(index) {
    return Math.floor((index - 1) / 2)
  }

  leftChildren(index) {
    return 2 * index + 1
  }
  rightChildren(index) {
    return 2 * index + 2
  }

  heapSort(arr) {
    let heap = []

    for (let i = 0; i < arr.length; i++) {
      this.insert(arr[i])
    }
    for (let i = 0; i < arr.length; i++) {
      heap.push(this.delet())
    }
    return this.arr
  }
  insert(item) {
    this.arr.push(item)
    let index = this.arr.length - 1
    let parnt = this.parent(index)
    while (this.arr[parnt] && this.arr[parnt] < this.arr[index]) {
      this.swap(parnt, index)
      index = this.parent(index)
      parnt = this.parent(index)
    }
  }

  delet() {
    let item = this.arr.shift()
    this.arr.unshift(this.arr.pop)
    let index = 0
    let leftChild = this.leftChildren(index)
    let rightChild = this.rightChildren(index)
    while (
      (this.arr[leftChild] && this.arr[leftChild] > this.arr[index]) ||
      this.arr[rightChild] > this.arr[index]
    ) {
      let max = leftChild
      if (this.arr[rightChild] && this.arr[rightChild] > this.arr[index]) {
        max = rightChild
      }
      this.swap(index, max)
      index = max
      leftChild = this.leftChildren(index)
      rightChild = this.rightChildren(index)
    }
    return item
  }

  swap(left, right) {
    let temp = this.arr[left]
    this.arr[left] = this.arr[right]
    this.arr[right] = temp
  }
}

let sort = new Sollution()
console.log(sort.heapSort([12, 5, 787, 1, 23]))

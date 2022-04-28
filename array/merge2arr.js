class Solution {
  merge(arr1, arr2, N, M) {
    //your code here

    for (let i = N, j = 0; i < N + M; i++, j++) {
      arr1[i] = arr2[j]
    }
    this.quickSort(arr1, 0, N + M - 1)
    return arr1
  }
  partition(arr, l, r) {
    let pivot = arr[Math.floor((r + l) / 2)]
    let i = l
    let j = r

    while (i <= j) {
      while (arr[i] < pivot) {
        i++
      }
      while (arr[j] > pivot) {
        j--
      }
      if (i <= j) {
        this.swap(arr, i, j)
        i++
        j--
      }
    }
    return i
  }
  swap(arr, leftIndex, rightIndex) {
    let temp = arr[leftIndex]
    arr[leftIndex] = arr[rightIndex]
    arr[rightIndex] = temp
  }
  quickSort(arr, l, r, k) {
    let index
    if (arr.length > 1) {
      index = this.partition(arr, l, r)
      if (l < index - 1) {
        this.quickSort(arr, l, index - 1)
      }
      if (r > index) {
        this.quickSort(arr, index, r)
      }
    }
  }
}

let merge2arr = new Solution()
console.log(merge2arr.merge([10, 12], [5, 18, 20], 2, 3))

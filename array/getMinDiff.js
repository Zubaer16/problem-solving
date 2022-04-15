class Solution {
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
  kthSmallest(arr, l, r, k) {
    let index
    if (arr.length > 1) {
      index = this.partition(arr, l, r)
      if (l < index - 1) {
        this.kthSmallest(arr, l, index - 1, k)
      }
      if (r > index) {
        this.kthSmallest(arr, index, r, k)
      }
    }
  }

  getMinDiff(arr, N, K) {
    // your code here
    this.kthSmallest(arr, 0, N - 1)

    let ans = arr[N - 1] - arr[0]
    let largest = arr[N - 1] - K
    let smallest = arr[0] + K

    for (let i = 0; i < N - 1; i++) {
      let min = Math.min(smallest, arr[i + 1] - K)
      let max = Math.max(largest, arr[i] + K)
      if (min < 0) {
        continue
      }
      ans = Math.min(ans, max - min)
    }
    return ans
  }
}

const minDiff = new Solution()
console.log(minDiff.getMinDiff([2, 6, 3, 4, 7, 2, 10, 3, 2, 1], 10, 5))

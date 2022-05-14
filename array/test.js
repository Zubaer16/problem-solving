class Solution {
  // Function to count inversions in the array.
  inversionCount(arr, N) {
    //your code here
    let low = 0
    let high = 1
    let count = 0

    while (high <= N) {
      if (arr[low] > arr[high]) {
        this.swap(arr, low++, high)
        count++
      } else {
        high++
      }
    }
    return count
  }

  swap(arr, first, last) {
    let temp = arr[first]
    arr[first] = arr[last]
    arr[last] = temp
  }
}

let inversion = new Solution()
console.log(inversion.inversionCount([2, 3, 4, 5, 6], 5))
console.log(inversion.inversionCount([2, 3, 4, 5, 6], 5))

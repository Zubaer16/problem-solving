class Solution {
  // Function to count inversions in the array.
  inversionCount(arr, N) {
    //your code here
    let solution = this.inversionAndcount(arr, 0, N - 1)
    return solution
  }

  inversionAndcount(arr, l, r) {
    //console.log(l, r)
    // let newArr = []
    // for (let i = l; i < r + 1; i++) {
    //   newArr.push(arr[i])
    // }
    // console.log('Array is ' + newArr)
    let count = 0
    if (l < r) {
      let m = Math.floor((l + r) / 2)

      // Total inversion count = left subarray
      // count + right subarray count + merge count

      // Left subarray count
      count += this.inversionAndcount(arr, l, m)
      //console.log('1st count = ' + count)

      //Right subarray count
      count += this.inversionAndcount(arr, m + 1, r)
      //console.log('2nd count =' + count)

      // Merge count
      count += this.mergeSortAndCount(arr, l, m, r)
      //console.log('3rd count = ' + count)
    }
    return count
  }

  mergeSortAndCount(arr, l, m, r) {
    // Left subarray
    let left = []

    for (let i = l; i < m + 1; i++) {
      left.push(arr[i])
    }

    // Right subarray
    let right = []

    for (let i = m + 1; i < r + 1; i++) {
      right.push(arr[i])
    }

    let i = 0,
      j = 0,
      k = l,
      swaps = 0

    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        arr[k++] = left[i++]
      } else {
        arr[k++] = right[j++]
        swaps += m + 1 - (l + i)
      }
    }

    while (i < left.length) {
      arr[k++] = left[i++]
    }

    while (j < right.length) {
      arr[k++] = right[j++]
    }
    //console.log(l, m, r, arr)
    return swaps
  }
}

let count = new Solution()
console.log(count.inversionCount([2, 4, 1, 3, 5], 5))

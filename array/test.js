// merge sort algorithm

/*function merge(arr) {
  if (arr.length < 2) {
    return arr
  }
  let middle = Math.floor(arr.length / 2)
  let half_1 = arr.slice(0, middle)

  let half_2 = arr.slice(middle, arr.length)

  const first = merge(half_1)
  const second = merge(half_2)

  return compare(first, second)
}

function compare(a, b) {
  let sort = []
  let count = 0
  while (a.length && b.length) {
    if (a[0] > b[0]) {
      sort.push(b.shift())
      count++
    } else {
      sort.push(a.shift())
    }
  }

  while (a.length) {
    sort.push(a.shift())
  }
  while (b.length) {
    sort.push(b.shift())
    count++
  }

  return sort
}

console.log(merge([2, 4, 1, 3, 5]))*/

class Solution {
  // Function to count inversions in the array.
  inversionCount(arr, N) {
    //your code here
    let solution = this.inversionAndcount(arr, 0, N - 1)
    return solution
  }

  inversionAndcount(arr, l, r) {
    let count = 0
    if (l < r) {
      let m = Math.floor((l + r) / 2)
      console.log(m)

      // Total inversion count = left subarray
      // count + right subarray count + merge count

      // Left subarray count
      count += this.inversionAndcount(arr, l, m)

      // Right subarray count
      count += this.inversionAndcount(arr, m + 1, r)

      // Merge count
      count += this.mergeSortAndCount(arr, l, m, r)
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
    return swaps
  }
}

/*class Solution {
  inversionCount(arr, N) {
    let inv_count = 0
    for (let i = 0; i < N - 1; i++) {
      for (let j = i + 1; j < N; j++) {
        if (arr[i] > arr[j]) inv_count++
      }
    }
    return inv_count
  }
}*/

let incount = new Solution()
console.log(incount.inversionCount([1, 20, 6, 4, 5], 5))

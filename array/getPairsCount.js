class Solution {
  getPairsCount(arr, n, k) {
    //code here
    let m = new Map()
    let count = 0
    for (let i = 0; i < n; i++) {
      if (m.has(k - arr[i])) {
        count += m.get(k - arr[i])
      }

      if (m.has(arr[i])) {
        m.set(arr[i], m.get(arr[i]) + 1)
      } else {
        m.set(arr[i], 1)
      }
    }
    return count
  }
}

let c = new Solution()
console.log(c.getPairsCount([1, 5, 7, 1], 4, 6))

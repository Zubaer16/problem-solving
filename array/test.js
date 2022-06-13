// class Solution {
//   getPairsCount(arr, n, k) {
//     //code here
//   }
// }

// let s = new Solution()
// console.log(s.getPairsCount([1, 5, 7, 1], 4, 6))

function getPairsCount(arr, n, k) {
  var m = new Map()
  var count = 0
  for (var i = 0; i < n; i++) {
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

console.log(getPairsCount([1, 5, 7, 1], 4, 6))

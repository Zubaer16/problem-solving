class Solution {
  minJumps(arr, n) {
    //code here
    let value = arr[0]
    let index = 0
    let count = 0
    if (n === 1) {
      return 0
    }
    if (value === 0) {
      return -1
    }
    for (let i = 0; i < n; i++) {
      index = index + value
      count++
      value = arr[index]
      let newValue = 0
      if (value === 0) {
        return -1
      }
      if (index >= n - 1) {
        return count
      } else {
        for (let i = index + 1; i <= index + value; i++) {
          let max = -Infinity
          if (arr[i] > max) {
            max = arr[i]
            value = max
          }
        }
      }
    }
  }
}

const jumps = new Solution()
console.log(jumps.minJumps([2, 3, 1, 1, 2, 4, 2, 0, 1, 1], 10))

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
    if (value >= n - 1) {
      return 1
    }
    for (let i = 0; i < n; i++) {
      let max = -Infinity
      for (let j = index; j < index + value; j++) {
        console.log('j = ' + j)
        if (max < arr[j]) {
          max = arr[j]
          // console.log('max' + max)
        }
      }
      ++count
      value = max
      index = index + value
      console.log('index :' + index)
      console.log('value: ' + value)
      if (value === 0) {
        return -1
      }
      if (index >= n - 1) {
        return count
      }
    }
  }
}

const jumps = new Solution()

console.log(jumps.minJumps([2, 3, 1, 1, 2, 4, 2, 0, 1, 1], 10))
// console.log(jumps.minJumps([1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9], 11))
// console.log(
//   jumps.minJumps(
//     [
//       70, 21, 46, 25, 54, 76, 92, 84, 47, 57, 46, 31, 38, 31, 75, 40, 61, 21,
//       84, 51, 86, 41,
//     ],
//     22
//   )
// )//

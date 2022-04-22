// class Solution {
//   minJumps(arr, n) {
//     if (n === 1) {
//       return 0
//     }
//     var jumps = Array.from({ length: n }, (_, i) => 0)
//     var min

//     jumps[n - 1] = 0

//     for (var i = n - 2; i >= 0; i--) {
//       if (arr[i] == 0) jumps[i] = Number.MAX_VALUE
//       else if (arr[i] >= n - i - 1) jumps[i] = 1
//       else {
//         min = Number.MAX_VALUE

//         for (var j = i + 1; j < n && j <= arr[i] + i; j++) {
//           if (min > jumps[j]) min = jumps[j]
//         }

//         if (min != Number.MAX_VALUE) jumps[i] = min + 1
//         else jumps[i] = min
//       }
//     }

//     if (jumps[0] === Number.MAX_VALUE) {
//       return -1
//     }
//     return jumps[0]
//   }
// }

class Solution {
  minJumps(arr, n) {
    let maxR = arr[0]
    let step = arr[0]
    let jump = 1
    if (n === 1) {
      return 0
    } else if (arr[0] === 0) {
      return -1
    } else {
      for (let i = 1; i < n; i++) {
        if (i === n - 1) {
          return jump
        }
        maxR = Math.max(maxR, i + arr[i])
        step--
        if (step == 0) {
          jump++
          if (i >= maxR) {
            return -1
          }
          step = maxR - i
        }
      }
    }
  }
}

const minJum = new Solution()
console.log(minJum.minJumps([0, 1, 1, 1, 1], 5))

// bad solution time complexity is O(n^3)
// class Solution {
//   //Function to find the sum of contiguous subarray with maximum sum.
//   maxSubarraySum(arr, N) {
//     // code here
//     let sum = -Infinity
//     let limit = 0
//     while (limit < N) {
//       let increment = 1
//       while (increment < N) {
//         let temp = 0
//         for (let i = N - increment; i >= limit; i--) {
//           temp = temp + arr[i]
//         }

//         if (sum < temp) {
//           sum = temp
//         }
//         increment++
//       }
//       limit++
//     }

//     return sum
//   }
// }

// class Solution {
//   //Function to find the sum of contiguous subarray with maximum sum.
//   maxSubarraySum(arr, N) {
//     // code here
//     let temp = 0
//     let sum = 0
//     for (let i = 0; i < N; i++) {
//       temp = temp + arr[i]
//       if (temp < 0) {
//         temp = 0
//       }
//       if (sum < temp) {
//         sum = temp
//       }
//     }
//     return sum
//   }
// }

class Solution {
  //Function to find the sum of contiguous subarray with maximum sum.
  maxSubarraySum(arr, N) {
    // code here
    let sum = arr[0]
    let temp = arr[0]
    for (let i = 1; i < N; i++) {
      if (arr[i] < temp + arr[i]) {
        temp = temp + arr[i]
      } else {
        temp = arr[i]
      }
      if (sum < temp) {
        sum = temp
      }
    }
    return sum
  }
}

const maxSubArr = new Solution()
console.log(maxSubArr.maxSubarraySum([-2, -3, 4, -1, -2, 1, 5, -3], 8))

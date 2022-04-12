// bad solution time complexity is O(n^3)
class Solution {
  //Function to find the sum of contiguous subarray with maximum sum.
  maxSubarraySum(arr, N) {
    // code here
    let sum = -Infinity
    let limit = 0
    while (limit < N) {
      let increment = 1
      while (increment < N) {
        let temp = 0
        for (let i = N - increment; i >= limit; i--) {
          temp = temp + arr[i]
        }

        if (sum < temp) {
          sum = temp
        }
        increment++
      }
      limit++
    }

    return sum
  }
}

const maxSubArr = new Solution()
console.log(maxSubArr.maxSubarraySum([-2, -3, 4, -1, -2, 1, 5, -3], 8))

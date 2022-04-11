class Solution {
  rotate(arr, n) {
    //code here
    let val = arr[n - 1]
    for (let i = n - 1; i > 0; i--) {
      arr[i] = arr[i - 1]
    }
    arr[0] = val
    return arr
  }
}

let rotate = new Solution()
console.log(rotate.rotate([1, 2, 3, 4, 5], 5))

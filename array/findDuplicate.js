// var findDuplicate = function (nums) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length; j++) {
//       if (i === j) {
//         continue
//       }
//       if (nums[i] === nums[j]) {
//         return nums[i]
//       }
//     }
//   }
// }

var findDuplicate = function (nums) {
  let sorted = nums
  sorted.sort()
  for (let i = 0; i < nums.length; i++) {
    if (sorted[i] === sorted[i + 1]) {
      return sorted[i]
    }
  }
}

console.log(findDuplicate([3, 1, 3, 4, 2]))

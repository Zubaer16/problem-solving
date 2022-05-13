/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var nextPermutation = function (nums) {
//   var len = nums.length
//   var i = len - 2
//   var j = len - 1

//   while (i >= 0 && nums[i] >= nums[i + 1]) i--

//   if (i >= 0) {
//     while (j > i && nums[j] <= nums[i]) j--
//     swap(nums, i, j)
//     reverse(nums, i + 1, len - 1)
//   } else {
//     reverse(nums, 0, len - 1)
//   }
//   return nums
// }

// var swap = function (arr, from, to) {
//   var tmp = arr[from]
//   arr[from] = arr[to]
//   arr[to] = tmp
// }

// var reverse = function (arr, start, end) {
//   while (start < end) {
//     swap(arr, start, end)
//     start++
//     end--
//   }
// }

let nextPermutation = function (arr) {
  let len = arr.length
  let i = arr.length - 2
  let j = arr.length - 1

  while (i >= 0 && arr[i] >= arr[i + 1]) i--

  if (i >= 0) {
    while (j > i && arr[j] <= arr[i]) j--
    swap(arr, i, j)
    reverse(arr, i + 1, len - 1)
  } else {
    reverse(arr, 0, len - 1)
  }
  return arr
}

let swap = function (arr, form, to) {
  let temp = arr[form]
  arr[form] = arr[to]
  arr[to] = temp
}

let reverse = function (arr, start, end) {
  while (start < end) {
    swap(arr, start, end)
    start++
    end--
  }
}

console.log(nextPermutation([1, 2, 3]))
console.log(nextPermutation([1, 3, 2]))
console.log(nextPermutation([2, 1, 3]))
console.log(nextPermutation([2, 3, 1]))
console.log(nextPermutation([3, 1, 2]))
console.log(nextPermutation([3, 2, 1]))
console.log(nextPermutation([1, 5, 1]))

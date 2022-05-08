let nextPermutation = function (nums) {
  let max = -Infinity
  let min = Infinity
  let minIndex
  let maxIndex
  for (let i = 0; i < nums.length; i++) {
    if (max < nums[i]) {
      max = nums[i]
      maxIndex = i
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (min > nums[i]) {
      min = nums[i]
      minIndex = i
    }
  }
  if (index === nums.length - 1) {
    swap(nums, nums.length - 2, nums.length - 1)
  } else if (index === nums.length - 2) {
    swap(nums)
  }
  return nums
}

let swap = function (nums, left, right) {
  let temp = nums[left]
  nums[left] = nums[right]
  nums[right] = temp
}

console.log(nextPermutation([3, 2, 1]))

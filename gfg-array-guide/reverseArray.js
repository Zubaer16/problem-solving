// -------------------------------naive approach
// function reverseArray(arr) {
//   let n = arr.length
//   let temp = new Array(n)

//   for (let i = 0; i < n; i++) {
//     temp[i] = arr[n - i - 1]
//   }

//   for (let i = 0; i < n; i++) {
//     arr[i] = temp[i]
//   }

//   return arr
// }

// const arr = [1, 4, 3, 2, 6, 5]
// const res = reverseArray(arr)

// console.log(res)

//---------------------------------- using two pointer

// function reverseArray(arr) {
//   let left = 0
//   let right = arr.length - 1

//   while (left < right) {
//     ;[arr[left], arr[right]] = [arr[right], arr[left]]
//     left++
//     right--
//   }
// }

// const arr = [1, 4, 3, 2, 6, 5]
// reverseArray(arr)

// console.log(arr)

// --------------------------------using swap

// function reverseArray(arr) {
//   let n = arr.length
//   for (let i = 0; i < n / 2; i++) {
//     let temp = arr[i]
//     arr[i] = arr[n - i - 1]
//     arr[n - i - 1] = temp
//   }
// }

// const arr = [1, 4, 3, 2, 6, 5]
// reverseArray(arr)

// console.log(arr)

// using inbuilt methods

function reverseArray(arr) {
  arr.reverse()
}

const arr = [1, 4, 3, 2, 6, 5]
reverseArray(arr)
console.log(arr)

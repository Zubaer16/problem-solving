//Naive approach
// function rotateArray(arr, d) {
//   let n = arr.length

//   for (let i = 0; i < d; i++) {
//     let last = arr[n - 1]
//     for (let j = n - 1; j > 0; j--) {
//       arr[j] = arr[j - 1]
//     }
//     arr[0] = last
//   }
// }

// const arr = [1, 2, 3, 4, 5, 6]
// const d = 2
// rotateArray(arr, d)
// console.log(arr)

// Using temporary array

// function rotateArray(arr, d) {
//   let n = arr.length
//   d %= n
//   let temp = new Array(n)

//   for (let i = 0; i < n; i++) {
//     temp[i] = arr[n - d + i]
//   }

//   for (let i = 0; i < n - d; i++) {
//     temp[i + d] = arr[i]
//   }

//   for (let i = 0; i < n; i++) {
//     arr[i] = temp[i]
//   }
// }

// const arr = [1, 2, 3, 4, 5, 6]
// const d = 2
// rotateArray(arr, d)
// console.log(arr)

//  Using reverse (recommended)

function rotateArray(arr, d) {
  let n = arr.length
  d %= n

  reverse(arr, 0, n - 1)
  reverse(arr, 0, d - 1)
  reverse(arr, d, n - 1)
}

function reverse(arr, start, end) {
  while (start < end) {
    let temp = arr[start]
    arr[start] = arr[end]
    arr[end] = temp
    start++
    end--
  }
}

const arr = [1, 2, 3, 4, 5, 6]
const d = 2
rotateArray(arr, d)
console.log(arr)

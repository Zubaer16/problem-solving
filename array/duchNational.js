//best solution

class Solution {
  swap(arr, first, second) {
    let temp = arr[first]
    arr[first] = arr[second]
    arr[second] = temp
  }
  sort012(arr, N) {
    let low = 0
    let mid = 0
    let high = arr.length - 1

    while (mid <= high) {
      if (arr[mid] === 0) {
        this.swap(arr, low++, mid++)
      } else if (arr[mid] === 1) {
        mid++
      } else if (arr[mid] === 2) {
        this.swap(arr, mid, high--)
      }
    }

    return arr
  }
}

// class Solution {
//   sort012(arr, N) {
//     let zeros = 0
//     let ones = 0
//     let twos = 0

//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] === 0) {
//         zeros++
//       } else if (arr[i] === 1) {
//         ones++
//       } else if (arr[i] === 2) {
//         twos++
//       }
//     }

//     for (let i = 0; i < zeros; i++) {
//       arr[i] = 0
//     }

//     for (let i = zeros; i < zeros + ones; i++) {
//       arr[i] = 1
//     }

//     for (let i = zeros + ones; i < zeros + ones + twos; i++) {
//       arr[i] = 2
//     }

//     return arr
//   }
// }

let duch = new Solution()
console.log(duch.sort012([1, 1, 0, 0, 2, 2], 6))

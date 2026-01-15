// iterative approach
// function getSubArray(arr) {
//   const n = arr.length
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       let subArray = []
//       for (let k = i; k <= j; k++) {
//         subArray.push(arr[k])
//       }
//       console.log(subArray.join(' '))
//     }
//   }
// }

// const arr = [1, 2, 3]
// const res = getSubArray(arr)

// recursive approach

function getSubArray(arr, start, end) {
  if (end === arr.length) {
    return
  } else if (start > end) {
    getSubArray(arr, 0, end + 1)
  } else {
    let subArray = '['
    for (var i = start; i < end; i++) {
      subArray += arr[i] + ','
    }
    subArray += arr[end] + ']'
    console.log(subArray)
    getSubArray(arr, start + 1, end)
  }
}

const arr = [1, 2, 3]
const res = getSubArray(arr, 0, 0)

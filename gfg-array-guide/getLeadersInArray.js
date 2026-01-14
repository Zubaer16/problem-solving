//Naive Approach
// function getLeadersInArray(arr) {
//   const res = []
//   for (let i = 0; i < arr.length; i++) {
//     let j
//     for (j = i + 1; j < arr.length; j++) {
//       if (arr[i] < arr[j]) {
//         break
//       }
//     }
//     if (j == arr.length) {
//       res.push(arr[i])
//     }
//   }

//   return res
// }

// const arr = [16, 17, 4, 3, 5, 2]
// const res = getLeadersInArray(arr)
// console.log(res.join(' '))

//Expected or alternative approach

function getLeadersInArray(arr) {
  let res = []
  let maxRight = arr[arr.length - 1]
  res.push(maxRight)

  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] > maxRight) {
      maxRight = arr[i]
      res.push(maxRight)
    }
  }
  res.reverse()

  return res
}

const arr = [16, 17, 4, 3, 5, 2]
const res = getLeadersInArray(arr)
console.log(res.join(' '))

// iterative approach
// function getAlternateElements(arr) {
//   let res = []
//   for (let i = 0; i < arr.length; i += 2) {
//     res.push(arr[i])
//   }
//   return res
// }

// const arr = [10, 20, 30, 40, 50]
// const res = getAlternateElements(arr)

// console.log(res.join(' '))

// recursive approach

function getAlternateElementsRec(arr, idx, res) {
  if (idx < arr.length) {
    res.push(arr[idx])
    getAlternateElementsRec(arr, idx + 2, res)
  }
}

function getAlternateElements(arr) {
  let res = []
  getAlternateElementsRec(arr, 0, res)
  return res
}

const arr = [10, 20, 30, 40, 50]
const res = getAlternateElements(arr)
console.log(res.join(' '))

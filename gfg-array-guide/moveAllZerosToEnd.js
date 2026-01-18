// one traversal pointer
function moveAllZerosToEnd(arr) {
  const n = arr.length
  let count = 0
  for (let i = 0; i < n; i++) {
    if (arr[i] !== 0) {
      ;[arr[i], arr[count]] = [arr[count], arr[i]]
      count++
    }
  }
}

const arr = [1, 2, 0, 4, 3, 0, 5, 0]
moveAllZerosToEnd(arr)
console.log(arr.join(' '))

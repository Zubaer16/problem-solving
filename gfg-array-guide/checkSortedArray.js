function checkSortedArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return false
    }
  }

  return true
}

const arr = [90, 80]
const res = checkSortedArray(arr)
console.log(res)

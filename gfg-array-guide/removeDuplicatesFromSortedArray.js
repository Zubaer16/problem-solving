function removeDuplicatesFromSortedArray() {
  const res = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != arr[i + 1]) {
      res.push(arr[i])
    }
  }

  return res
}

const arr = [1]
const res = removeDuplicatesFromSortedArray(arr)
console.log(res.join(' '))

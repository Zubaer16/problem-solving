function operationsToMakeAllArrayEqual(arr, k) {
  const n = arr.length
  let max = arr[0]
  let res = 0
  for (let i = 0; i < n; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
  }

  for (let i = 0; i < n; i++) {
    if ((max - arr[i]) % k != 0) {
      return -1
    } else {
      res += (max - arr[i]) / k
    }
  }

  return res
}

const arr = [4, 7, 19, 16]
const k = 3
const res = operationsToMakeAllArrayEqual(arr, k)
console.log(res)

function moveNegPos(arr) {
  let neg = 0
  let pos = arr.length - 1
  while (neg <= pos) {
    if (arr[neg] > 0) {
      swap(arr, neg++, pos--)
    } else {
      neg++
    }
  }
  return arr
}

function swap(arr, first, last) {
  let temp = arr[first]
  arr[first] = arr[last]
  arr[last] = temp
}

console.log(moveNegPos([-12, 11, -13, -5, 6, -7, 5, -3, -6]))

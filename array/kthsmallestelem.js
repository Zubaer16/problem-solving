function kthSmallest(arr, l, r, k) {
  let count = 0
  let min = Infinity
  for (l = 0; l < r; l++) {
    if (arr[l] < min) {
      min = arr[l]
    }
  }
}

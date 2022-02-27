function getMinMax(arr, n) {
  //code here
  let max = -Infinity
  let min = Infinity
  let newArr = []
  for (let i = 0; i < n; i++) {
    if (max < arr[i]) {
      max = arr[i]
    }

    if (min > arr[i]) {
      min = arr[i]
    }
  }
  return (newArr = [min, max])
}

console.log(getMinMax([5, 4, 3, 2, 1], 5))
